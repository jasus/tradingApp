import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-trade',
  templateUrl: './new-trade.component.html',
  styleUrls: ['./new-trade.component.scss']
})
export class NewTradeComponent implements OnInit {

  selectOptions = {};
  trade = {
    rate: 1.23
  };

  constructor() { }  

  ngOnInit() {
    this.selectOptions = [
      {value:1,name:"Option 1"},
      {value:2,name:"Option 2"},
      {value:3,name:"Option 3"}
    ]
  }

}
