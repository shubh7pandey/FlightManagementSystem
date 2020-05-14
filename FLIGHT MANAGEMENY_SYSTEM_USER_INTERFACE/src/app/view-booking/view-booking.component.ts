import { Component, OnInit } from '@angular/core';
import { CheckService } from '../services/checkService/check.service';
import { ConnectionService } from '../services/connection/connection.service';
import { User } from '../classes/User/user';
import { Booking } from '../classes/Booking/booking';
import { Router } from '@angular/router';
import { Passenger } from '../classes/Passenger/passenger';
import { TokenStorageService } from '../services/tokenStorageService/token-storage.service';


@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {

  user: User
  bookingList: Array<Booking>
  passengerList: Array<Passenger>

  
  constructor(private tokenStorage: TokenStorageService, private route: Router , private connect: ConnectionService) {

    // this.bookingList = [this.check.testBooking]  

   }

  ngOnInit(): void {

    
    // this.check.currentUser.subscribe(i => this.user = i);
    
    this.connect.getBookingList(this.tokenStorage.getUser().username).subscribe(i => this.bookingList = i)

  }

  goToDashBoard(){
    this.route.navigateByUrl('/dashboard');
  }

  deleteBooking(booking: Booking){
    console.log("DELETE"+booking)
    alert("ARE YOU SURE ?")
    this.connect.deleteBooking(booking.id);
    this.route.navigateByUrl('/dashboard')
  }

  // showPassenger(i: Booking){
  //   this.connect.getPassenger(i.id).subscribe(i=> this.passengerList = i)
  //   console.log(this.passengerList)
  // }

}
