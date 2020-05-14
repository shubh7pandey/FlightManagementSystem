import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenStorageService } from '../tokenStorageService/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RouteAuthService {

  constructor( private tokenStorage: TokenStorageService ) { }

  public isAdminAuthenticated(): boolean {
      
      if(this.tokenStorage.getUser().roles[0] === 'ADMIN'){
        return true;
      }
      else{
        return false;
      }
  }

  public isCustomerAuthenticated(): boolean {
    
    // alert(this.tokenStorage.getUser().roles[0])
      if(this.tokenStorage.getUser().roles[0] === 'CUSTOMER'){
        return true;
      }
      else{
        return false;
      }
    
     
  }


}
