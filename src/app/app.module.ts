import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AirlinePassDashboardComponent } from './shared/components/airline-pass-dashboard/airline-pass-dashboard.component';
import { PassInfoCardComponent } from './shared/components/pass-info-card/pass-info-card.component';
import { TotalCheckInComponent } from './shared/components/total-check-in/total-check-in.component';

@NgModule({
  declarations: [
    AppComponent,
    AirlinePassDashboardComponent,
    PassInfoCardComponent,
    TotalCheckInComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
