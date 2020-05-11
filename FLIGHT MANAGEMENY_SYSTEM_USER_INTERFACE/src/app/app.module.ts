import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { HomeComponent } from './home/home.component';
import { constRouting } from './app.routing';
import { CheckService } from './services/checkService/check.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddAirportComponent } from './add-airport/add-airport.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AddScheduledFlightComponent } from './add-scheduled-flight/add-scheduled-flight.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    SearchFlightComponent,
    BookFlightComponent,
    ViewBookingComponent,
    HomeComponent,
    DashboardComponent,
    AddAirportComponent,
    AddFlightComponent,
    AddScheduledFlightComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    constRouting,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [CheckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
