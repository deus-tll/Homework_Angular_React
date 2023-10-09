import { Component, Input, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/gallery.service';
import { Painting } from 'src/app/models/painting.model';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrls: ['./painting.component.css']
})
export class PaintingComponent implements OnInit {
  constructor(private galleryService: GalleryService) { }

  ngOnInit(): void {
    this.paintingsFromSameAuthor = this.galleryService.getPaintingsByAuthor(this.painting?.author, this.painting?.id);
  }

  @Input() painting:Painting | null | undefined = null;
  paintingsFromSameAuthor: Painting[] = [];

  onClick(i: number) {
    this.painting = this.galleryService.getPaintingByIndex(i);
    this.paintingsFromSameAuthor = this.galleryService.getPaintingsByAuthor(this.painting?.author, this.painting?.id);
  }

  
}
