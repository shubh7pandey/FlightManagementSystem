import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../services/authService/auth.service';
import { TokenStorageService } from '../services/tokenStorageService/token-storage.service';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { CheckService } from '../services/checkService/check.service';
// import { ConnectionService } from '../services/connection/connection.service';
// import { VirtualTimeScheduler } from 'rxjs';
// import { User } from '../classes/User/user';

@Component({
  selector: 'app-login',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  
  submitted= false;
  showError: boolean;

  constructor(private authService: AuthService, private route: Router, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  // get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        // window.location.reload();
        if(this.roles[0] === 'ADMIN'){
          this.route.navigateByUrl('adDashboard')
        }
        if(this.roles[0] === 'CUSTOMER'){
          this.route.navigateByUrl('dashboard')
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  logout(){
    this.tokenStorage.signOut();
    this.route.navigateByUrl("/")
  }
  reloadPage() {
    window.location.reload();
  }

}
