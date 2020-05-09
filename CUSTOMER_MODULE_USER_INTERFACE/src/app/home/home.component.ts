import { Component, OnInit } from '@angular/core';
import { CheckService } from '../services/checkService/check.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginStatus: Boolean;

  constructor(private checkService: CheckService, private route: Router) { 
    this.checkService.currentStatus.subscribe(i => this.loginStatus = i)
  }

  ngOnInit(): void {
    this.checkService.currentStatus.subscribe(i => this.loginStatus = i)
  }

  logOut(){
    this.checkService.changeAdminStatus(false)
    this.checkService.changeStatus(false)
    this.route.navigateByUrl("/")
  }
  signUp(){
    this.route.navigateByUrl("/signUp")
  }

  logIn(){
    this.route.navigateByUrl('/signIn')
  }

}
