import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { SetInRangeComponent } from './set-in-range/set-in-range.component';
import { HeadsOrTailsComponent } from './heads-or-tails/heads-or-tails.component';
import { RollTheDiceComponent } from './roll-the-dice/roll-the-dice.component';
import { RandomApiService } from './random-api.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SetInRangeComponent,
    HeadsOrTailsComponent,
    RollTheDiceComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RandomApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
