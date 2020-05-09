import { Component, OnInit } from '@angular/core';
import { CheckService } from '../services/checkService/check.service';
import { ConnectionService } from '../services/connection/connection.service';
import { User } from '../classes/User/user';
import { Booking } from '../classes/Booking/booking';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  user: User
  bookingList: Array<Booking>

  
  constructor(private check:CheckService, private route: Router , private connect: ConnectionService) {

    this.check.currentUser.subscribe(i => this.user = i);
    
    this.connect.getBookingList(this.user.eMail).subscribe(i => {
      this.bookingList = i 
      // console.log(i)
    })
    // this.bookingList = [this.check.testBooking]  

   }

  ngOnInit(): void {
  }

  goToDashBoard(){

    this.route.navigateByUrl('/dashboard');

  }

  deleteBooking(booking: Booking){
    console.log("DELTE"+booking)
    this.connect.deleteBooking(booking.id);
    this.route.navigateByUrl('/dashboard')
    // this.route
  }

}
