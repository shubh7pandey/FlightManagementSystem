import { Component, OnInit } from '@angular/core';
import { ScheduledFlight } from '../classes/ScheduledFlight/scheduled-flight';
import { ConnectionService } from '../services/connection/connection.service';
import { Airport } from '../classes/Airport/airport';
import { Router } from '@angular/router';
import { CheckService } from '../services/checkService/check.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-an-search',
  templateUrl: './an-search.component.html',
  styleUrls: ['./an-search.component.css']
})
export class AnSearchComponent implements OnInit {


  public source: String;
  public destination: String;
  public dateTime: Date
  public passenger: number;
  public status: Boolean
  public adminStatus: Boolean = false

  public airportList: Array<Airport> = []
  constructor(private connect: ConnectionService,private router: Router, private fB: FormBuilder, private check: CheckService) { 


  }

  
  

  public allowBooking: boolean = false
  public search: boolean = false

  
  public flightList: Array<ScheduledFlight> = [];
  
  public logInCheck:Boolean = false
  
  
  ngOnInit(): void {

    
    // this.check.currentStatus.subscribe(i => this.status = i)
    // this.check.currentAdminStatus.subscribe(i => this.adminStatus = i)
 
    
    this.connect.getAirport_List().subscribe(i => {
      this.airportList = i
    })
    

    // this.check.currentStatus.subscribe(i => {
    //   this.logInCheck = i
    // })

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
    
    if(this.adminStatus){
        this.router.navigateByUrl('/adDashboard')
      }
    else{
        if(this.status=== true){
          this.router.navigateByUrl('/dashboard')
        }
        else{
            this.router.navigateByUrl('/signIn')
          }
      }
    }
  
  
}
