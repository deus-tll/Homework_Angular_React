import { Component } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { Painting } from '../models/painting.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  constructor(private galleryService: GalleryService) {
    this.paintings = this.galleryService.getPaintings();
    this.activePainting = null;
  }

  paintings: Painting[];
  activePainting: Painting | null | undefined;

  onClick(i: number) {
    this.activePainting = this.galleryService.getPaintingByIndex(i);
  }

  goBackToGallery() {
    this.activePainting = null;
  }
}