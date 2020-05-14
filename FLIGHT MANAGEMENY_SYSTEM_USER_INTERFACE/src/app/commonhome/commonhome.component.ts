import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-commonhome',
  templateUrl: './commonhome.component.html',
  styleUrls: ['./commonhome.component.css']
})
export class CommonhomeComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  signUp(){
    this.route.navigateByUrl("/signUp")
  }

  logIn(){
    this.route.navigateByUrl('/signIn')
  }

  search(){
    this.route.navigateByUrl('')
  }

}
