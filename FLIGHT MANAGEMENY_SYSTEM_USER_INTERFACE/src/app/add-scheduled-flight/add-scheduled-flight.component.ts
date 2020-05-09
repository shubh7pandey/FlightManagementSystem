import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConnectionService } from '../services/connection/connection.service';
import { getLocaleDateTimeFormat } from '@angular/common';
import { ScheduledFlight } from '../classes/ScheduledFlight/scheduled-flight';

@Component({
  selector: 'app-add-scheduled-flight',
  templateUrl: './add-scheduled-flight.component.html',
  styleUrls: ['./add-scheduled-flight.component.css']
})
export class AddScheduledFlightComponent implements OnInit {

  constructor(private fb: FormBuilder, private connect: ConnectionService) { }


  flightForm: FormGroup
  ngOnInit(): void {

    this.flightForm = this.fb.group({

      id: Number = null,
      flightNum: String = null,
      price: Number= null,
      availableSeats: Number= null,
      sourceAirportCode: String= null,
      destAirportCode: String= null,
      arrivalTime: getLocaleDateTimeFormat,
      departureTime: getLocaleDateTimeFormat
    })

  }

  addFlight(){
    console.log(this.flightForm.controls['arrivalTime'])
    this.connect.postScFlight(new ScheduledFlight(
      this.flightForm.controls['id'].value,
      this.connect.getFlight(this.flightForm.controls['flightNum'].value),
      this.flightForm.controls['price'].value,
      this.flightForm.controls['availableSeats'].value,
      [],
      this.connect.getAirport(this.flightForm.controls['sourceAirportCode'].value),
      this.connect.getAirport(this.flightForm.controls['destAirportCode'].value),
      this.flightForm.controls['arrivalTime'].value,
      this.flightForm.controls['departureTime'].value
      
    ))

  }

}
