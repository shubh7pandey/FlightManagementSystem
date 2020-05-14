import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Airport } from '../classes/Airport/airport';
import { ConnectionService } from '../services/connection/connection.service';

@Component({
  selector: 'app-add-airport',
  templateUrl: './add-airport.component.html',
  styleUrls: ['./add-airport.component.css']
})
export class AddAirportComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private connect: ConnectionService) { }

  airportForm: FormGroup
  show: boolean = false
  airportList : Array<Airport>
  ngOnInit(): void {

    this.airportForm = this.formBuilder.group({

      "name": ['',Validators.required],
      "location": ['', Validators.required],
      "code": ['', Validators.required]

    })

  }

  addAirport(){
    const airport = new Airport(this.airportForm.controls['name'].value,this.airportForm.controls['location'].value,this.airportForm.controls['code'].value)
    this.connect.postAirport(airport).subscribe(i => this.airportList = i)
      this.show = true;
  }

}
