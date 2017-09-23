import { Component, OnInit } from '@angular/core';
import { TradeService } from '../../services/trade.service';

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.scss']
})
export class TradesComponent implements OnInit {

  constructor( private tradeService:TradeService ) { }

  trades = [];

  ngOnInit() {
    this.getTrades();
  }

  private getTrades(){
    this.tradeService.getAll()
      .subscribe(res => {
        this.trades = res;
      }, error => {
        console.log(error);
      });
  }

}
