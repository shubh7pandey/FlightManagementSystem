import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './mustmatch.validator'
import { CheckService } from '../services/checkService/check.service';
import { User } from '../classes/User/user';
import { ConnectionService } from '../services/connection/connection.service';
import { AuthService } from '../services/authService/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  mobnumPattern = "^[0-9]{10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
  form: any = {};
  // isSuccessful = false;
  isSignUpFailed = true;
  errorMessage = '';
  submitted= false;
  showError: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router
    )
     { }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email,Validators.pattern(this.emailPattern)]],
      mobile: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern(this.mobnumPattern)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      username:['', Validators.required],
      lastName: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // if(this.registerForm.invalid){
    //   return 
    // }
    this.authService.register(this.registerForm).subscribe(
      data => {
        console.log(data);
        this.showError = false
        this.submitted = true;
        this.isSignUpFailed = false;
        this.route.navigateByUrl('/signIn')
      },
      err => {
        this.errorMessage = err.error.message;
        this.showError = true;
      }
    );
    // if(!this.isSignUpFailed){
    //   this.route.navigateByUrl('/signIn')
    // }

  }

onReset() {
    this.submitted = false
    this.registerForm.reset();
}
}
