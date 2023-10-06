import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { WorkInfoComponent } from './work-info/work-info.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { ResourcesComponent } from './resources/resources.component';

import { SkillsService } from './skills.service';
import { ExperienceService } from './experience.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    WorkInfoComponent,
    SkillsComponent,
    ExperienceComponent,
    CustomDatePipe,
    ResourcesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    SkillsService,
    ExperienceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
