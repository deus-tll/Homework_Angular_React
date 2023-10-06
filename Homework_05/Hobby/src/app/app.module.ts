import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HobbyInfoComponent } from './hobby-info/hobby-info.component';
import { HobbyImagesComponent } from './hobby-images/hobby-images.component';
import { HobbyImagesService } from './hobby-images.service';
import { HobbyInfoService } from './hobby-info.service';

@NgModule({
  declarations: [
    AppComponent,
    HobbyInfoComponent,
    HobbyImagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    HobbyInfoService,
    HobbyImagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
