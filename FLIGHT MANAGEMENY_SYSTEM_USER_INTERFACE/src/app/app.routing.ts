import { RouterModule, Routes } from '@angular/router';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddAirportComponent } from './add-airport/add-airport.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AddScheduledFlightComponent } from './add-scheduled-flight/add-scheduled-flight.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


const route: Routes = [
    { path: 'bookFlight', component: BookFlightComponent },
    { path: 'searchFlight' , component: SearchFlightComponent},
    { path: 'signIn' , component: SignInComponent},
    { path: 'signUp', component: SignUpComponent },
    { path: 'viewBooking' , component: ViewBookingComponent},
    { path:'' , component:SearchFlightComponent},
    { path:'dashboard', component: DashboardComponent},
    { path: 'addAirport', component: AddAirportComponent},
    { path: 'addFlight', component: AddFlightComponent},
    { path: 'addScFlight', component: AddScheduledFlightComponent},
    { path: 'adDashboard', component: AdminDashboardComponent}
    
    
];

export const constRouting = RouterModule.forRoot(route);