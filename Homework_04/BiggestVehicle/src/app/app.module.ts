import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BiggestVehiclesComponent } from './biggest-vehicles/biggest-vehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    BiggestVehiclesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
