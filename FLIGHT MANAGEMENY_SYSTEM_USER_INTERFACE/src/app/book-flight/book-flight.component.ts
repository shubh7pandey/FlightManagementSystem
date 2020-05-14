import { Component, OnInit } from '@angular/core';
import { CheckService } from '../services/checkService/check.service';
import { ConnectionService } from '../services/connection/connection.service';
import { ScheduledFlight } from '../classes/ScheduledFlight/scheduled-flight';
// import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Passenger } from '../classes/Passenger/passenger';
// import { NgModuleCompileResult } from '@angular/compiler/src/ng_module_compiler';
import { Booking } from '../classes/Booking/booking';
import { Router } from '@angular/router';
import { User } from '../classes/User/user';
import { TokenStorageService } from '../services/tokenStorageService/token-storage.service';

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


  constructor(private fb: FormBuilder, private connect: ConnectionService, private check: CheckService, private tokenService: TokenStorageService, private route: Router ) 
  {
  }

  ngOnInit(): void {
    this.check.currentFlight.subscribe(i => this.bookedFlight = i)
    this.passNum = Array(this.numOfPass).fill(0).map((x,i)=>i);
    this.form = this.fb.group({
      name: ['',Validators.required],
      id: [,Validators.required],
      age: ['',Validators.required],
      
    })
  }


  public payStatus: boolean = false
  public show: boolean = false
  public bookingDone:boolean = false

  public passengerList: Array<Passenger> = []

  get f() { return this.form.controls }

  addPassenger() 
  {
    if(this.form.controls['name'].value === '' ||
    this.form.controls['age'].value === '' ||
    this.form.controls['id'].value === '' ){
      return
    }
    
    this.passengerList.push(new Passenger(this.form.controls['name'].value,
                                          this.form.controls['age'].value,
                                          this.form.controls['id'].value
                                          ))
    this.form.reset()
    this.show = true
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
    this.connect.updateBookingList(booking,this.tokenService.getUser().username).subscribe(i=> console.log(i) )
    alert("Booking SUCCESSFUL")
    this.route.navigateByUrl('/dashboard')
  }

  deletePassenger(j: any)
  {
    this.passengerList[j] = null
    alert("deleted: "+this.passengerList[j])
  }



}

