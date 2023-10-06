import { Component } from '@angular/core';
import { ExperienceService } from '../experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  constructor(private experienceService: ExperienceService) {  }

  getCertificates = () => this.experienceService.getCertificates();
  getExperiences = () => this.experienceService.getExperiences();
}
