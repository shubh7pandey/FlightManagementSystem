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
  public search: boolean;

  public airportList: Array<Airport> = []
  constructor(private connect: ConnectionService,private router: Router, private fB: FormBuilder, private check: CheckService) { 


  }
  public flightList: Array<ScheduledFlight> = [];
  
  ngOnInit(): void {
      this.connect.getAirport_List().subscribe(i => {
      this.airportList = i
    })
  }

  searchFlight()
  {
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
      // console.log(f)
      this.search = true
    })
  }

  bookFlight(j:ScheduledFlight ){
    this.check.changeFlight(j)
    this.router.navigateByUrl("/bookFlight")
  }

  goto(){
    this.router.navigateByUrl('/dashboard')
  }
  
  
  
}
