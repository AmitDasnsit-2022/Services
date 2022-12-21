import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../services/userdata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  userss:any
  constructor(private user:UserdataService){
    console.log('user',user.users);
    this.userss=user.users()

  }

  ngOnInit(): void {
  }

}
