import { Component } from '@angular/core';
import { RandomApiService } from '../random-api.service';

@Component({
  selector: 'app-set-in-range',
  templateUrl: './set-in-range.component.html',
  styleUrls: ['./set-in-range.component.css']
})
export class SetInRangeComponent {
  min:number = 0;
  max:number = 100;
  count:number = 5;
  numbers:number[] = [];

  constructor(private randomApiService: RandomApiService) {}

  generateNumbers = () => {
    this.randomApiService.generateNumbers(this.min, this.max, this.count).subscribe(
      (response) => {
        this.numbers = response.result.random.data;
        console.log(this.numbers);
      },
      (error) => {
        console.log('Error', error);
      }
    );
  };
}