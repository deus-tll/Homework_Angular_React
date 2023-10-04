import { Component } from '@angular/core';

@Component({
  selector: 'app-hobby-info',
  templateUrl: './hobby-info.component.html',
  styleUrls: ['./hobby-info.component.css']
})
export class HobbyInfoComponent {
  name:string = 'Practicing Klingon';
  description:string = "The Klingons (/\ˈklɪŋ(ɡ)ɒn/ KLING-(g)on; Klingon: tlhIngan [\ˈt͡ɬɪŋɑn]) are a fictional species in the science fiction franchise Star Trek.\nDeveloped by screenwriter Gene L. Coon in 1967 for the original Star Trek (TOS) series, Klingons were swarthy humanoids characterized by prideful ruthlessness and brutality. Klingons practiced feudalism and authoritarianism, with a warrior caste relying on slave labor, and is reminiscent of Ancient Sparta.\nThe Klingon language has a small vocabulary compared to natural languages, containing around 2,000 words after it had been created in the 1990s. After its initial creation, Okrand has frequently created new words, so that the total number of words has grown up to approximately 3,000.";
}
