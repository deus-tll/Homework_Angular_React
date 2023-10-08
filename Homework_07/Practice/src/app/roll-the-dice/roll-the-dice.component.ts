import { Component } from '@angular/core';
import { RandomApiService } from '../random-api.service';
import { Dice } from '../models/dice.model';

@Component({
  selector: 'app-roll-the-dice',
  templateUrl: './roll-the-dice.component.html',
  styleUrls: ['./roll-the-dice.component.css']
})
export class RollTheDiceComponent {
  computerDiceResult: number = 0;
  userDiceResult: number = 0;
  currentPlayer: 'computer' | 'user' = 'user';
  currentDice: Dice | null = null;
  isRollDisabled: boolean = false;
  computerInterval: any = null;

  constructor(private randomApiService: RandomApiService) { }

  rollDice = () => {
    const min = 1;
    const max = 6;
    const count = 2;

    if (this.currentPlayer === 'computer') {
      this.playTurn(min, max, count, (diceResults) => {
        this.computerDiceResult += this.summurize(diceResults);
        this.isRollDisabled = false;
      });
    } else {
      this.playTurn(min, max, count, (diceResults) => {
        this.userDiceResult += this.summurize(diceResults);
        this.isRollDisabled = true;
        this.startComputerTurn();
      });
    }

    this.currentPlayer = this.currentPlayer === 'user' ? 'computer' : 'user';
  };

  playTurn(min: number, max: number, count: number, callback: (diceResults: number[]) => void) {
    this.randomApiService.generateNumbers(min, max, count).subscribe(
      (response) => {
        const diceResults = response.result.random.data;
        this.currentDice = new Dice(diceResults[0], diceResults[1]);
        callback(diceResults);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  summurize = (numbers: number[]) => {
    return numbers.reduce((a, b) => a + b, 0);
  };

  whoRolled() {
    return this.currentPlayer === 'user' ? 'computer' : 'user';
  };

  startComputerTurn() {
    this.computerInterval = setTimeout(() => {
      this.rollDice();
    }, 3000);
  }

  replay = () => {
    clearTimeout(this.computerInterval);

    this.userDiceResult = 0;
    this.computerDiceResult = 0;
    this.currentPlayer = 'user';
    this.isRollDisabled = false;
    this.currentDice = null;
  };
}