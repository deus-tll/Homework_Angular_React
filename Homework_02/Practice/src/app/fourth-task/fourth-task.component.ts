import { Component } from '@angular/core';
import { Photo } from '../models/photo.model'

@Component({
  selector: 'app-fourth-task',
  templateUrl: './fourth-task.component.html',
  styleUrls: ['./fourth-task.component.css']
})
export class FourthTaskComponent {
  photoData: Photo;

  constructor(){
    this.photoData = new Photo(
      'https://image.cnbcfm.com/api/v1/image/107238183-1683642530891-All-New_Ford_Ranger_Raptor_12.jpg?v=1684584001&w=740&h=416&ffmt=webp&vtcrop=y',
      'https://static.vecteezy.com/system/resources/previews/022/100/192/original/ford-logo-transparent-free-png.png',
      'https://www.thoughtco.com/thmb/u43KDJGdbvu_0qW8k_bDUf2z1-Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-515461052-dd32da349fa5499fb777ce0214a956e8.jpg'
    );
  }
}
