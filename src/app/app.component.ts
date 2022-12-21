import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { UserdataService } from './services/userdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Make services';
  userss: any;
  inforecieved1: string[] = [];
  inforecieved2: string[] = [];
  inforecieved3: string[] = [];

  constructor(private user: UserdataService,private dservice:DataService) {
    console.log('user', user.users);
    this.userss = user.users()
  }
  getinfofromService1() {
    this.inforecieved1 = this.dservice.getInfo1()
  }
  getinfofromService2() {
    this.inforecieved2 = this.dservice.getInfo2()
  }
  getinfofromService3() {
    this.inforecieved3 = this.dservice.getInfo3()
  }
}
