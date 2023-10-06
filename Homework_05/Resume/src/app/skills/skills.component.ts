import { Component } from '@angular/core';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  constructor(private skillsService: SkillsService) {  }

  getHardSkills = () => this.skillsService.getHardSkills();
  getSoftSkills = () => this.skillsService.getSoftSkills();
}