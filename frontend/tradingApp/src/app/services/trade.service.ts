import { Injectable } from '@angular/core';
import { Headers, Http, Request } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';

import { Trade } from '../classes/trade';

@Injectable()
export class TradeService {

  constructor(private http:Http) { 
  }

  // API CALLS

  getAll ():Observable<Trade[]> {
    return this.http.get(`${environment.apiURL}/trades`)
      .map(res => res.json());
  }

}
