import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { RouteAuthService } from '../services/RouteAuthService/route-auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerAccessGuard implements CanActivate {
  constructor(private routeAuth: RouteAuthService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.routeAuth.isCustomerAuthenticated()){
        return of(true)
      }
      else{
        return of(false)
      }
  }
  
}
