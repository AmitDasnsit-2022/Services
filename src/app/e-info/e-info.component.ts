import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css']
})
export class EInfoComponent implements OnInit {

  inforecieved1: string[] = [];
  inforecieved2: string[] = [];
  inforecieved3: string[] = [];
  value: any;


  getinfofromService1() {
    this.inforecieved1 = this.dservice.getInfo1()
  }
  getinfofromService2() {
    this.inforecieved2 = this.dservice.getInfo2()
  }
  getinfofromService3() {
    this.inforecieved3 = this.dservice.getInfo3()
  }

  updateInfo(frm: any){
     this.dservice.addInfo(frm.value.location)
  }
  constructor(private dservice: DataService) {
  }

  ngOnInit(): void {
  }

}
