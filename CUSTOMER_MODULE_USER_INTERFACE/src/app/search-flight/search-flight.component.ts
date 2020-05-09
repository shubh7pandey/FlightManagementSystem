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
  public dateTime: Date
  public passenger: number;
  public status: Boolean
  public adminStatus: Boolean

  public airportList: Array<Airport> = []
  constructor(private connect: ConnectionService,private router: Router, private fB: FormBuilder, private check: CheckService) { 

    this.check.currentStatus.subscribe(i => this.status = i)
    this.check.currentAdminStatus.subscribe(i => this.adminStatus = i)
    
    this.connect.getAirport_List().subscribe(i => {
      this.airportList = i
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
    for(var i = 0 ; i < this.airportList.length ; i++){
      if(this.airportList[i].name === this.source){
        this.source = this.airportList[i].code
        break
      }
    }
    for(var i = 0 ; i < this.airportList.length ; i++){
      if(this.airportList[i].name === this.destination){
        this.destination = this.airportList[i].code
        break
      }
    }

    this.connect.getScheduledFlight(this.source,this.destination,this.dateTime).subscribe(f => {
      this.flightList = f
      console.log(f)
    })
    // console.log(this.flightList[0].price)
    this.search = true;
    if(this.status === true){

      this.allowBooking = true;

    }

  }

  bookFlight(j:ScheduledFlight ){
    if(this.status === true){
      this.check.changeFlight(j);
      this.router.navigateByUrl('/bookFlight')
    }
      
    // if(this.adminStatus === true){
    //   this.router.navigateByUrl('/adDashboard')
    // }

    else{
      this.router.navigateByUrl("/signIn")
    }

  }

  goto(){
    if(this.status=== true){
      this.router.navigateByUrl('/dashboard')
    }
    else{
        this.router.navigateByUrl('/signIn')
      }
  }
  
  
  
}
