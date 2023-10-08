import { Component } from '@angular/core';
import { RandomApiService } from '../random-api.service';
import { HeadTails } from '../enums/head-or-tails.enum';

@Component({
  selector: 'app-heads-or-tails',
  templateUrl: './heads-or-tails.component.html',
  styleUrls: ['./heads-or-tails.component.css']
})
export class HeadsOrTailsComponent {
  HeadTails = HeadTails;
  choice: HeadTails = HeadTails.Head;

  constructor(private randomApiService: RandomApiService) {}

  choose = (choice:HeadTails) => {
    this.choice = choice;
  };

  getYourChoice = () => {
    return this.choice === HeadTails.Head ? 'Head' : 'Tails';
  }

  generate = () => {
    
  }
}
