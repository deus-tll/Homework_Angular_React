import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryService } from './gallery.service';
import { PaintingComponent } from './gallery/painting/painting.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    PaintingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
