import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-check-in',
  templateUrl: './total-check-in.component.html',
  styleUrls: ['./total-check-in.component.scss']
})
export class TotalCheckInComponent implements OnInit {

  @Input() totalCheckInArr! : any[];
  @Input() getObj! : any;
  public countpass! : any;

  constructor() { }

  ngOnInit(): void {
    let count = this.totalCheckInArr.filter((ele : any) => {
      // console.log(ele.checkedIn);
      return ele.checkedIn;
    })

    this.countpass = count.length;
  }

}
