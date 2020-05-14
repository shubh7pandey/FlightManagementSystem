import { Injectable } from '@angular/core';
import { Airport } from 'src/app/classes/Airport/airport';
import { ScheduledFlight } from 'src/app/classes/ScheduledFlight/scheduled-flight';
import { Booking } from 'src/app/classes/Booking/booking';
import { User } from 'src/app/classes/User/user';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableLike } from 'rxjs';
import { Flight } from 'src/app/classes/Flight/flight';
import { Passenger } from 'src/app/classes/Passenger/passenger';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor(private http: HttpClient) { }


  baseUrl: string = "http://localhost:7004/user/customer/"
  postUser(user:User){
    return this.http.post<User>(this.baseUrl,user).subscribe(i=>console.log("ADDED"));
  }

  // Get User By ID
  getUserByEmail(email: String): Observable<User>{
      return this.http.get<User>(this.baseUrl+email);
    }

  // Get Flight By Schedule
  getScheduledFlight(source: any, dest: any, depTime: Date): Observable<Array<ScheduledFlight>>{
    console.log(this.baseUrl+"searchFlight/"+source+"/"+dest+"/"+depTime)
    // return  this.http.get<Array<ScheduledFlight>>(this.baseUrl+"searchFlight/"+source+"/"+dest+"/"+depTime)  
    return this.http.get<Array<ScheduledFlight>>("http://localhost:7004/admin/scheduledFlights/search/"+source+"/"+dest+"/"+depTime)
  }

  updateBookingList(booking: Booking,userId: String): Observable<Array<Booking>> {
    return this.http.post<Array<Booking>>("http://localhost:7001/customer/changeBookingList/"+userId, booking)
    // return this.http.post<Array<Booking>>(this.baseUrl+"changeBookingList/"+userId, booking)
  }

  getBookingList(userId: String): Observable<Array<Booking>>{
    // this.http.get<Array<Booking>>(this.baseUrl+"getBookingList/"+userId).subscribe(i => console.log(i))
    return this.http.get<Array<Booking>>(this.baseUrl+"getBookingList/"+userId);
  }
  
  getAirport_List(): Observable<Array<Airport>>{
    return this.http.get<Array<Airport>>(this.baseUrl+"getAirportList/");
  }

  deleteBooking(id: Number){
    // console.log(this.baseUrl+"deleteById/"+id)
    this.http.delete(this.baseUrl+"deleteById/"+id).subscribe(i =>i)
  }

  getPassenger(id: Number): Observable<Array<Passenger>>{
    return this.http.get<Array<Passenger>>(this.baseUrl+"getPassengers/"+id)
  }
  // getPassengerList(id: Number): Observable<List<Passenger


  //-------------------------
  //ADMIN
  //-------------------------
  
  
  // postAirport(airport: Airport): Observable<Airport>{
    // return this.http.post<Airport>(this.baseUrl,airport);
    // console.log(airport)
    // return null;
  // }

  airportList: Array<Airport> = []
  postAirport(airport: Airport): Observable<Array<Airport>>{
    // this.airportList.push(airport)
    console.log(airport)
    this.http.post<Airport>("http://localhost:7004/admin/airports",airport).subscribe(i =>{
    airport = i
    console.log(i)
    })

    return this.getAirport_List();
  }

  flightList: Array<Flight> = []
  postFlight(flight: Flight): Flight{
    this.flightList.push(flight)
    // console.log(this.flightList.length)
    this.http.post<Flight>("http://localhost:7004/admin/flights",flight).subscribe(i => flight = i)
    return flight
  }

  getFlight(id: String): Flight{
    let testFlight = null
    this.http.get<Flight>("http://localhost:7004/admin/flights/"+id).subscribe(i => testFlight = i);
    return testFlight;
  }

  getAirport(code: String): Airport{
    let testAirport = null
    this.http.get<Airport>("http://localhost:7004/admin/airports/"+code).subscribe(i => testAirport = i);
    return testAirport;
  }

  postScFlight(flight: ScheduledFlight): ScheduledFlight{
    this.http.post<ScheduledFlight>("http://localhost:7004/admin/scheduledFlights/",flight).subscribe(i => flight = i);
    return flight;
  }

}