import { Component } from '@angular/core';
import { CheckService } from './services/checkService/check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customer';

  constructor(private checkService: CheckService){}

  ngOnInIt(){
    // this.checkService.changeAdminStatus(false)
    // this.checkService.currentAdminStatus.subscribe(i => console.log(i))
    // this.checkService.changeStatus(false)
    // this.checkService.changeUser(null)
    // this.checkService.changeFlight(null)
    // this.checkService.changeBooking(null)
  }
}
