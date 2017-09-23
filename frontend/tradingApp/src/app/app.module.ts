import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { MaterializeModule } from 'angular2-materialize';

import { APP_ROUTING } from './app.routes';

// SERVICES
import { TradeService } from './services/trade.service';

// COMPONENTS
import { AppComponent } from './app.component';
import { TradesComponent, NewTradeComponent } from './components/components';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TradesComponent,
    NewTradeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    APP_ROUTING,
    MaterializeModule
  ],
  providers: [
    TradeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
