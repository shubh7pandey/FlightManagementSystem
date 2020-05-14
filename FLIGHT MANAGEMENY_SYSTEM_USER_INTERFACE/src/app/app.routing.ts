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
import { AnSearchComponent } from './an-search/an-search.component';
import { AdminAccessGuard } from './RouteGuard/admin-access.guard';
import { CustomerAccessGuard } from './RouteGuard/customer-access.guard';


const route: Routes = [
    { path: 'bookFlight', component: BookFlightComponent, canActivate: [CustomerAccessGuard]},
    { path: 'searchFlight' , component: SearchFlightComponent, canActivate: [CustomerAccessGuard]},
    { path: 'signIn' , component: SignInComponent},
    { path: 'signUp', component: SignUpComponent },
    { path: 'viewBooking' , component: ViewBookingComponent, canActivate: [CustomerAccessGuard]},
    { path: '' , component: AnSearchComponent},
    { path: 'dashboard', component: DashboardComponent, canActivate: [CustomerAccessGuard]},
    { path: 'addAirport', component: AddAirportComponent, canActivate: [AdminAccessGuard]},
    { path: 'addFlight', component: AddFlightComponent, canActivate: [AdminAccessGuard]},
    { path: 'addScFlight', component: AddScheduledFlightComponent, canActivate: [AdminAccessGuard]},
    { path: 'adDashboard', component: AdminDashboardComponent, canActivate: [AdminAccessGuard]}
    
    
];

export const constRouting = RouterModule.forRoot(route);