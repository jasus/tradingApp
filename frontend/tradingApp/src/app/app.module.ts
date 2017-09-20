import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTING } from './app.routes';

// COMPONENTS
import { AppComponent } from './app.component';
import { TradesComponent, NewTradeComponent } from './components/components';

@NgModule({
  declarations: [
    AppComponent,
    TradesComponent,
    NewTradeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
