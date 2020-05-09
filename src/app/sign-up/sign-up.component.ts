import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './mustmatch.validator'
import { CheckService } from '../services/checkService/check.service';
import { User } from '../classes/User/user';
import { ConnectionService } from '../services/connection/connection.service';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  mobnumPattern = "^[0-9]{10}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private check: CheckService,
    private connect: ConnectionService)
     { }


  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: Number,
      Name: ['', [Validators.required, Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email,Validators.pattern(this.emailPattern)]],
      mobile: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(10),Validators.pattern(this.mobnumPattern)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      dob: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
  }
    let user = new User(
      this.registerForm.controls['id'].value,
      this.registerForm.controls['Name'].value,
      this.registerForm.controls['password'].value,
      this.registerForm.controls['mobile'].value,
      this.registerForm.controls['email'].value,
      []
    )
    // console.log(user)
    
    this.connect.postUser(user).subscribe(i => i = i)

    // stop here if form is invalid
    
    // display form values on success
    alert("SIGN UP SUCCESFULL")
    this.router.navigateByUrl('/signIn');
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}
}
