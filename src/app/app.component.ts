import { Component, OnInit } from '@angular/core';
import { Ipassenger } from './shared/model/airline';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'airlinepasstask';

  ngOnInit(): void {
    
  }

  passengers : Ipassenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkInDate: 1490742000000,
    children: null
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkInDate: null,
    children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkInDate: 1491606000000,
    children: null
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkInDate: 1488412800000,
    children: [{ name: 'Jessica', age: 1 }]
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkInDate: null,
    children: null
  },
  {
    id: 6,
    fullname: 'jiya',
    checkedIn: false,
    checkInDate: null,
    children:  [{ name: 'deny', age: 7 }]
  }
];

}
