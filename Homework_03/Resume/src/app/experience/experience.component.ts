import { Component } from '@angular/core';
import { Experience } from '../models/experience.model';
import { Certificate } from '../models/certificate.model';
import { Resource } from '../models/resource.model';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      dateFrom: new Date(2021, 11, 30),
      dateTo: 'Now',
      text: "Студент. Комп'ютерна академія STEP. Направлення - розробка програмного забезпечення."
    }
  ];

  certificates: Certificate[] = [
    {
      date: new Date(2022, 6, 21),
      text: "\"IT Essentials\" Issued by Cisco",
      url: 'https://www.credly.com/badges/121041e2-91f2-4c0f-902b-b4d6639ce43f?source=linked_in_profile'
    }
  ];
}
