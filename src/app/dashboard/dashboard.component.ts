import { Component, OnInit } from '@angular/core';
import { CheckService } from '../services/checkService/check.service';
// import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { ConnectionService } from '../services/connection/connection.service';
import { Subscriber } from 'rxjs';
import { Airport } from '../classes/Airport/airport';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name: String
  airportList: Array<Airport> = []
    
  constructor(private check: CheckService, private route: Router, private connect: ConnectionService) {
    // this.check.currentStatus.subscribe(i => console.log(i))
    this.check.currentUser.subscribe(i => this.name = i.name)
   }

  ngOnInit(): void {
  }

  booking(){
    // this.check.currentStatus.subscribe(i => alert(i))
    this.route.navigateByUrl('/viewBooking')
  }

  view(){
    // this.check.currentStatus.subscribe(i => alert(i))
    this.connect.getAirport_List().subscribe(i => {
      for(var j  = 0; j < i.length ; j++){
        this.airportList.push(i[j]);
      }
    })
    this.check.changeAirportList(this.airportList);
    this.route.navigateByUrl('/searchFlight')
  }

}
