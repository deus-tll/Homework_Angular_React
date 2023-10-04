import { Component } from '@angular/core';
import { PersonalInfo } from '../models/person.model';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {
  personalInfo: PersonalInfo = {
    photoPath: '../../assets/my-photo.jpg',
    name: 'Артем',
    lastName: 'Міллер',
    patronymic: 'Валерійович',
    phoneNumber: '+380958171340',
    country: 'Україна',
    city: 'Очаків',
    about: "Я - C# розробник-початківець, який шукає роботу на позиції C# Trainee Developer. Хоча у мене немає комерційного досвіду роботи в цій галузі, я швидко навчаюсь і дуже відданий роботі. Раніше я мав справу з невеликими локальними проектами з різних направлень в області .NET, але дуже бажаю попрацювати над реальними і цікавим задачами, що саме головне - у команді. Моя сміливість та мотивація до навчання допоможуть мені вдосконалити свої навички та бути більш корисним на цій посаді. Крім того, завдяки моїй відданості роботі, я можу вчитися достатньо швидко та наполегливо."
  };
}
