import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckService } from '../services/checkService/check.service';
import { ConnectionService } from '../services/connection/connection.service';
import { VirtualTimeScheduler } from 'rxjs';
import { User } from '../classes/User/user';

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  user: User
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private check: CheckService,
    private connect: ConnectionService)
     { }

     ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', [Validators.required,Validators.email]],
          password: String
      });
    }

    get f() { return this.loginForm.controls; }

  login()
  {
  
    this.submitted = true;
    
    if(this.loginForm.controls['email'].value === "admin@g.com" && this.loginForm.controls['password'].value === "123")
    {
      this.check.changeUser(null);
      this.check.changeBooking(null)
      this.check.changeFlight(null)
      this.check.changeStatus(true)
      this.check.changeAdminStatus(true)
      this.router.navigateByUrl('/adDashboard')
    }    
    this.connect.getUserByEmail((this.loginForm.controls['email'].value)).subscribe(i => {
      this.user = i;
      this.checkPass()
    })
     
  
    // console.log(this.user)

    if(this.loginForm.invalid)
    {
      return;
    }
   
   
    //  if(this.f.email.value=="admin@gmail.com" && this.f.password.value=="12345678") {
    //        yagyesh03@gmail.com
    //      }
  }



  checkPass(){

    if(this.loginForm.controls['password'].value === this.user.pass)
    {  
      this.check.changeUser(this.user);
      this.check.changeBooking(null)
      this.check.changeFlight(null)
      this.check.changeStatus(true)
      this.router.navigateByUrl('/dashboard');
    }
    else{
      alert("Invalid Password")
      this.loginForm.reset();
    }

  }

}
