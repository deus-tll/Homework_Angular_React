import { Component } from '@angular/core';
import { HobbyInfoService } from '../hobby-info.service';
import { Info } from '../models/info.model';

@Component({
  selector: 'app-hobby-info',
  templateUrl: './hobby-info.component.html',
  styleUrls: ['./hobby-info.component.css']
})
export class HobbyInfoComponent {
  hobby: Info;

  constructor(private hobbyInfoService: HobbyInfoService) {
    this.hobby = this.hobbyInfoService.getHobbyInfo();
  }
}