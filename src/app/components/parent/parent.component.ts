import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{

  loginName = ''
  age = 18
  userName = 'Device';
  devices = [
  {
    price: 600000,
    name: 'keyboard'
  },
  {
    price: 300000,
    name: 'mouse',
  },
  {
    price:1200000,
    name: 'screen'
  },
  {
    price: 2000000,
    name: 'card'
  }

  ]

  getValue(event: Event) {
    console.log((event.target as HTMLInputElement).value);
    this.loginName = (event.target as HTMLInputElement).value
  }

  up(){
    this.age +=1
  }
}
