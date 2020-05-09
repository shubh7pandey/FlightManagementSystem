import { Injectable } from '@angular/core';
import { Airport } from 'src/app/classes/Airport/airport';
// import { Schdeule } from 'src/app/classes/Schedule/schdeule';
import { Flight } from 'src/app/classes/Flight/flight';
import { ScheduledFlight } from 'src/app/classes/ScheduledFlight/scheduled-flight';
import { BehaviorSubject } from 'rxjs';
import { Booking } from 'src/app/classes/Booking/booking';
import { User } from 'src/app/classes/User/user';
import { Passenger } from 'src/app/classes/Passenger/passenger';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  
  constructor() { }
  logInCheck: boolean= false
  numOfPassenger: Number = 0
  public testAirport1: Airport = new Airport("TEST_AIRPORT_01","TEST_LOCATION_01","ATC01");
  public testAirport2: Airport = new Airport("TEST_AIRPORT_02","TEST_LOCATION_02","ATC02");
  // public testSchedule: Schdeule = new Schdeule(this.testAirport1,this.testAirport2, new Date(2020, 5, 23, 12, 12, 0, 0), new Date(2020, 5, 23, 2, 12, 0, 0))
  public testFlight: Flight = new Flight(4402,"AIR ASIA","AIRBUS 720",110);
  public testScheduledFlight: ScheduledFlight = new ScheduledFlight(111,this.testFlight,7000,110,[],this.testAirport1,this.testAirport2,new Date(2020, 5, 23, 12, 12, 0, 0), new Date(2020, 5, 23, 2, 12, 0, 0))
  public flightList: Array<ScheduledFlight> = [this.testScheduledFlight]
  public testPassenger: Passenger = new Passenger("Yagyesh", 21, "1111")
  public testBooking: Booking = new Booking(12,String(new Date()),[this.testPassenger],this.testScheduledFlight.price,this.testScheduledFlight,1)
  public testUser: User = new User(120,"Yagyesh","123","7976649278","yagyesh03@gmail.com",[])//this.testBooking
  public random = 1111
  


//---------------------------------------------
  //BEHAVIOUR_SUBJECTS:
  //LOGIN STATUS
  private checkLogInSource = new BehaviorSubject<Boolean>(false);
  currentStatus = this.checkLogInSource.asObservable();
  changeStatus(status: Boolean){
    this.checkLogInSource.next(status)
  }

  private adminLogIn = new BehaviorSubject<Boolean>(false);
  currentAdminStatus = this.checkLogInSource.asObservable();
  changeAdminStatus(status: Boolean){
    this.adminLogIn.next(status)
  }

  private airportListSource = new BehaviorSubject<Array<Airport>>(null);
  currentAirportList = this.airportListSource.asObservable();
  changeAirportList(airportlist: Array<Airport>){
    this.airportListSource.next(airportlist);
  }

  // private passengerListSource = new BehaviorSubject<Array<Passenger>>(null);
  // currentPassengerList = this.passengerListSource.asObservable()
  // changePassengerList(passList: Array<Passenger>){
  //   this.passengerListSource.next(passList)
  // }


  //User
  private userSource = new BehaviorSubject<User>(null);
  currentUser = this.userSource.asObservable();
  changeUser(user: User){
    this.userSource.next(user);
  }

  //Scheduled Flight
  private flightSource = new BehaviorSubject<ScheduledFlight>(this.testScheduledFlight);
  currentFlight = this.flightSource.asObservable();
  changeFlight(flight: ScheduledFlight){
    this.flightSource.next(flight);
  }

  //Booking
  private bookingSource = new BehaviorSubject<Booking>(null);
  currentBooking = this.bookingSource.asObservable();
  changeBooking(booking: Booking){
    this.bookingSource.next(booking);
  }
//----------------------------------------------


  makeBooking(userId: Number, passengerList: Array<Passenger>, flightId:Number ){
    this.testBooking.id = this.random + 12
    this.testBooking.bookingDate = String(new Date())
    this.testBooking.passengerList = passengerList
    for(var i = 0 ; i< this.flightList.length; i++){
      if(this.flightList[i].id === flightId){
        this.testBooking.flight = this.flightList[i]
      }
    }
    // let temp = this.currentBookingList['userId']
    // temp.push(this.testBooking)
    // this.changeBookingList({
    //   userId: temp
    // })
    

  }


  

}