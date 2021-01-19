import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router, ActivatedRoute } from '@angular/router';
// import { first } from 'rxjs/operators';
//import { AlertService, AuthenticationService } from '../_services';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit{
   loginForm = FormGroup;

   constructor(private formBuilder: FormBuilder) { }
   
   ngOnInit (){
      this.loginForm = this.formBuilder.group({
         username: ['', [ Validators.required, Validators.email ]], 
         password: ['', [ Validators.required, Validators.minLength(8) ]], 
         remember: [false, Validators.requiredTrue]
      });
   }

   onSubmit() {
      console.log(this.loginForm.value, this.loginForm.controls,  'Submit clicked')
   }
}