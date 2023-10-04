import { Component } from '@angular/core';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-hobby-images',
  templateUrl: './hobby-images.component.html',
  styleUrls: ['./hobby-images.component.css']
})
export class HobbyImagesComponent {
  person: Photo = {
    photo_url: 'https://static.standard.co.uk/2021/05/14/11/HIGH_RGB_SS21_PANDORA_BRILLIANCE_ROSARIO_MODEL_PRIORITY_01_RGB.jpg?width=1024&auto=webp&quality=50&crop=968%3A645%2Csmart',
    text: 'A photo of a famous person who enjoys this hobby (Rosario Dawson)'
  }

  hobby: Photo = {
    photo_url: 'https://www.usatoday.com/gcdn/-mm-/1cec2cac75dcb7c1245f329f46757618ef9c96bd/c=612-108-3682-1842/local/-/media/2017/06/01/USATODAY/USATODAY/636319119372090086-Klingon.jpg?width=3070&height=1734&fit=crop&format=pjpg&auto=webp',
    text: 'A photo that reflects the essence of the hobby'
  }
}
