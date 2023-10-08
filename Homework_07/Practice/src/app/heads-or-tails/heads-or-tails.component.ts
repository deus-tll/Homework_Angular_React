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
  result: string = '';

  constructor(private randomApiService: RandomApiService) { }

  choose = (choice: HeadTails) => {
    this.choice = choice;
    this.result = '';
  };

  getYourChoice = () => {
    return this.choice === HeadTails.Head ? 'Head' : 'Tails';
  }

  generate = () => {
    this.randomApiService.generateNumbers(0, 1, 1).subscribe(
      (response) => {
        let res = response.result.random.data[0];

        if (this.choice === res) {
          this.result = 'Won';
        }
        else {
          this.result = 'Lost';
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
