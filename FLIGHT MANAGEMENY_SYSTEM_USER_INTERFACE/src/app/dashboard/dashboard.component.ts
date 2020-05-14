import { Component, OnInit } from '@angular/core';
import { CheckService } from '../services/checkService/check.service';
// import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../services/connection/connection.service';
import { Subscriber } from 'rxjs';
import { Airport } from '../classes/Airport/airport';
import { User } from '../classes/User/user';
import { TokenStorageService } from '../services/tokenStorageService/token-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name: String
  airportList: Array<Airport> = []
  bookingLength = 0
  user: any;
  constructor(private check: CheckService, private route: Router, private tokenSerivce: TokenStorageService, private connect: ConnectionService) {
    // this.check.currentStatus.subscribe(i => console.log(i))
    // this.check.currentUser.subscribe(i => this.name = i.name)
    // window.location.reload();
   }

  ngOnInit(): void 
  {
    this.user = this.tokenSerivce.getUser()
    this.connect.getBookingList(this.user.username).subscribe(i => this.bookingLength = i.length);
  }

  booking(){
    // this.check.currentStatus.subscribe(i => alert(i))
    this.route.navigateByUrl('/viewBooking')
  }

  view(){
    this.route.navigateByUrl('/searchFlight')
  }

}
