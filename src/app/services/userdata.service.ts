import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users(){
    return [
      {Name:'amit',Email:'amit@robomq.io',age:23},
      {Name:'amit2',Email:'amit@robomq.io',age:23},
      {Name:'amit3',Email:'amit@robomq.io',age:23},
      {Name:'amit4',Email:'amit@robomq.io',age:23},
    ]
  }
}
