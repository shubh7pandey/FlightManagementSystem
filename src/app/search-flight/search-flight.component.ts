import { Component, OnInit } from '@angular/core';
// import { Airport } from '../classes/Airport/airport';
import { ConnectionService } from '../services/connection/connection.service';
import { FormBuilder } from '@angular/forms';
// import { Flight } from '../classes/Flight/flight';
import { ScheduledFlight } from '../classes/ScheduledFlight/scheduled-flight';
// import { Schdeule } from '../classes/Schedule/schdeule';
import { CheckService } from '../services/checkService/check.service';
import { Router } from '@angular/router';
import { Airport } from '../classes/Airport/airport';
// import { $ } from "jquery";
// import $ = require("jquery");

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {

  public source: String;
  public destination: String;
  public dateTime: Date = new Date()
  public passenger: number;
  public status: Boolean

  public airportList: Array<Airport> = []
  constructor(private connect: ConnectionService,private router: Router, private fB: FormBuilder, private check: CheckService) { 

    this.check.currentStatus.subscribe(i => this.status = i)
    
    this.connect.getAirport_List().subscribe(i => {
      this.airportList = i
      // console.log(this.airportList)
    })
    

  }

  
  

  public allowBooking: boolean = false
  public search: boolean = false

  
  public flightList: Array<ScheduledFlight> = [];
  
  public logInCheck:Boolean = false
  
  
  ngOnInit(): void {

    this.check.currentStatus.subscribe(i => {
      this.logInCheck = i
    })

  }

  searchFlight()
  {
// console.log(this.source,this.destination,this.dateTime)
    
    this.connect.getScheduledFlight(this.source,this.destination,this.dateTime).subscribe(f => this.flightList = f)
    // console.log(this.flightList[0].price)
    this.search = true;
    if(this.logInCheck === true){

      this.allowBooking = true;

    }

  }

  bookFlight(j:ScheduledFlight ){
    if(this.allowBooking==true){
      this.check.changeFlight(j);
      this.router.navigateByUrl('/bookFlight')
    }

    else{
      alert("PLEASE LOG IN FIRST TO BOOK FLIGHT")
    }

  }

  
  
  
}
