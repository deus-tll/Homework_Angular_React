import { Component } from '@angular/core';
import { WondersService } from '../wonders.service';
import { Wonder } from '../models/wonder.model';

@Component({
  selector: 'app-wonders',
  templateUrl: './wonders.component.html',
  styleUrls: ['./wonders.component.css']
})
export class WondersComponent {
  wonders: Wonder[];

  constructor(private wondersService: WondersService) {
    this.wonders = this.wondersService.getWonders();
  }
}
