import { Injectable } from '@angular/core';
import { Experience } from './models/experience.model';
import { Certificate } from './models/certificate.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  private experiences: Experience[] = [
    {
      dateFrom: new Date(2021, 11, 30),
      dateTo: 'Now',
      text: "Студент. Комп'ютерна академія STEP. Направлення - розробка програмного забезпечення."
    }
  ];

  private certificates: Certificate[] = [
    {
      date: new Date(2022, 6, 21),
      text: "\"IT Essentials\" Issued by Cisco",
      url: 'https://www.credly.com/badges/121041e2-91f2-4c0f-902b-b4d6639ce43f?source=linked_in_profile'
    }
  ];

  getCertificates = () => this.certificates;
  getExperiences = () => this.experiences;
}
