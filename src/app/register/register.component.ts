import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  
  constructor(private formBuilder: FormBuilder, private SpinnerService: NgxSpinnerService) { 
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    })
  }

  ngOnInit(): void {}

  onSubmit() {
    if(this.registerForm.invalid){
      console.log('Invalid') 
   }
    console.log(this.registerForm.value, this.registerForm.controls,  'Submit clicked')
    this.SpinnerService.show();

      setTimeout(() => { this.SpinnerService.hide();  }, 3000)
  }

  onReset() {
    this.registerForm.reset();
  }

}
