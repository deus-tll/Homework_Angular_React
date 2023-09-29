import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondTaskComponent } from './second-task/second-task.component';
import { ThirdTaskComponent } from './third-task/third-task.component';
import { FourthTaskComponent } from './fourth-task/fourth-task.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondTaskComponent,
    ThirdTaskComponent,
    FourthTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
