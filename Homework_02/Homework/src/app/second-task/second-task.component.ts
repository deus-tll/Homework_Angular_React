import { Component } from '@angular/core';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.css']
})
export class SecondTaskComponent {
  quotes: string[] = [
    "If you think your teacher is tough, wait till you get boss",
    "Life is not fair — get used to it!",
    "Success is a lousy teacher. Це seduces smart people in thinking they can't lose",
    "Be nice to nerds..."
  ];
}
