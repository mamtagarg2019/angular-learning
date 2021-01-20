import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { first } from 'rxjs/operators';
//import { AlertService, AuthenticationService } from '../_services';
import { NgxSpinnerService } from "ngx-spinner";

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit{
   loginForm:FormGroup;
   isFormSubmitted:boolean = false
   
   constructor(private formBuilder: FormBuilder, private router: Router, private SpinnerService: NgxSpinnerService) { 
      this.loginForm = this.formBuilder.group({
         username: ['', [ Validators.required, Validators.email ]], 
         password: ['', [ Validators.required, Validators.minLength(8) ]], 
         remember: [false, Validators.requiredTrue]
      });
   }
   
   ngOnInit (){}

   redirect () {
      this.router.navigate(['register'])
    }

   onSubmit() {
      if(this.loginForm.invalid){
         this.isFormSubmitted = true
         //return false;      
      }
      console.log(this.loginForm.value, this.loginForm.controls,  'Submit clicked')
      this.SpinnerService.show();

      setTimeout(() => { this.SpinnerService.hide();  }, 3000)
   }
}