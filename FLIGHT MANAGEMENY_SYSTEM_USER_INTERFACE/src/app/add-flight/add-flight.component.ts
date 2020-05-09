import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConnectionService } from '../services/connection/connection.service';
import { Flight } from '../classes/Flight/flight';


@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})

export class AddFlightComponent implements OnInit {


  public flight: Flight
  public flightForm: FormGroup;
  public show: boolean = false
  constructor(private formB: FormBuilder, private connect: ConnectionService) { }

  ngOnInit(): void {

    this.flightForm = this.formB.group({

    
      number: [0, Validators.required],
      name: ['', Validators.required],
      model: ['',Validators.required],
      capacity: [0, Validators.required],
      

    })


  }

  addFlight(){

    this.flight = this.connect.postFlight(new Flight(
      this.flightForm.controls['number'].value,
      this.flightForm.controls['name'].value,
      this.flightForm.controls['model'].value,
      this.flightForm.controls['capacity'].value
    ))   
    // console.log(this.flight.length)   
    this.show = true

  }

  
  
}
