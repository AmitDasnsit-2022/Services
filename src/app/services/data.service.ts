import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  value(dt: any): string[] {
    throw new Error('Method not implemented.');
  }

  info1:string[]=["Amit","183","amit@robomq"];
  info2:string[]=["Gaurav","123","gaurav@robomq"];
  info3:string[]=["Anujit","128","anuj@robomq"];


  getInfo1(){
    return this.info1
  }
  getInfo2(){
    return this.info2
  }
  getInfo3(){
    return this.info3
  }
  addInfo(dt: string){
   this.info1.push(dt)
   this.info2.push(dt)
   return dt
  }
  constructor() { }


  }
