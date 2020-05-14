import { Component, OnInit } from '@angular/core';
import { CheckService } from '../services/checkService/check.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/tokenStorageService/token-storage.service';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginStatus: Boolean;
  adminSt: Boolean;

  constructor(private checkService: CheckService, 
              private tokenStorage: TokenStorageService,
              private route: Router,
              private userService: UserService) { 
    // this.checkService.currentStatus.subscribe(i => this.loginStatus = i)
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()){
      this.loginStatus = true
    }
    else{
      this.loginStatus = false
    }
  }

  logOut(){
    this.tokenStorage.signOut();
    this.route.navigateByUrl("/")
  }
  // signUp(){
  //   this.route.navigateByUrl("/signUp")
  // }

  // logIn(){
  //   this.route.navigateByUrl('/signIn')
  // }

  // home(){
  //   this.route.navigateByUrl('/dashboard')
  // }

}
