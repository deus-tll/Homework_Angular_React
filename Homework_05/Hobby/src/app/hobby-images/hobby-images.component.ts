import { Component } from '@angular/core';
import { Photo } from '../models/photo.model';
import { HobbyImagesService } from '../hobby-images.service';

@Component({
  selector: 'app-hobby-images',
  templateUrl: './hobby-images.component.html',
  styleUrls: ['./hobby-images.component.css']
})
export class HobbyImagesComponent {
  hobby: Photo;
  person: Photo;
  
  constructor(private hobbyImagesService: HobbyImagesService) {
    this.hobby = hobbyImagesService.getHobbyPhotoBlock();
    this.person = hobbyImagesService.getPersonPhotoBlock();
  }
}