import { RouterModule, Routes } from '@angular/router';

import { TradesComponent, NewTradeComponent  } from "./components/components";



const APP_ROUTES: Routes = [
  { path: 'trades', component: TradesComponent },
  { path: 'new-trade', component: NewTradeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'trades' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: false });
