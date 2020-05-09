import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goToAddAirport(){
    this.route.navigateByUrl("/addAirport")
  }

  goToAddFlight(){
    this.route.navigateByUrl("/addFlight")
  }

  addSchFlight(){
    this.route.navigateByUrl("/addScFlight")
  }

}
