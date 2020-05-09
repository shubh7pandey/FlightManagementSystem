import { Component, OnInit } from '@angular/core';
import { CheckService } from '../services/checkService/check.service';
import { ConnectionService } from '../services/connection/connection.service';
import { ScheduledFlight } from '../classes/ScheduledFlight/scheduled-flight';
// import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Passenger } from '../classes/Passenger/passenger';
// import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';
import { Booking } from '../classes/Booking/booking';
import { Router } from '@angular/router';
import { User } from '../classes/User/user';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit 
{

  public bookedFlight: ScheduledFlight;
  form: FormGroup;
  passNum: any[]

  public numOfPass: Number = 4


  constructor(private fb: FormBuilder, private connect: ConnectionService , private check: CheckService, private route: Router ) 
  {
    this.check.currentFlight.subscribe(i => this.bookedFlight = i)
    this.passNum = Array(this.numOfPass).fill(0).map((x,i)=>i);
  }

  ngOnInit(): void {
  }


  public payStatus: boolean = false
  public name: String
  public age: Number
  public uin: String
  public show: boolean = false
  public bookingDone:boolean = false

  public passengerList: Array<Passenger> = []

  addPassenger() 
  {
    
    this.passengerList.push(new Passenger(this.name, this.age, this.uin))
    this.show = true
    this.name= null
    this.age = null
    this.uin = null
  
  }

  doneBooking()
  {
    let booking: Booking = new Booking(0,null, null,null,null,null)
    booking.id = 0
    this.check.currentFlight.subscribe(i => booking.flight = i);
    booking.bookingDate = String(new Date())
    booking.passengerList = this.passengerList
    booking.cost = 0 
    booking.numOfPassenger = this.passengerList.length
    this.check.changeBooking(booking);
    let user: User
    this.check.currentUser.subscribe(i => user = i)
    // console.log(booking)
    this.connect.updateBookingList(booking,user.eMail).subscribe(i=>{

      // for( var j = 0; j < i.length;j++){
      //   this.passengerList = i[j].passengerList
      //   console.log(i[j])
      //   console.log(this.passengerList)
      // }
    })
    
    // let bookingList: Array<Booking>
    // this.check.currentUser.subscribe(i => console.log(i))
    // bookingList.push(booking)
    // user.bookingList = bookingList
    // this.check.changeUser(user)
    
    alert("Booking SUCCESSFUL")
    // this.check.currentBooking.subscribe(i=>console.log(i))
    this.route.navigateByUrl('/dashboard')
  }

  deletePassenger(j: any)
  {
    this.passengerList[j] = null
    alert("deleted: "+this.passengerList[j])
  }



}

