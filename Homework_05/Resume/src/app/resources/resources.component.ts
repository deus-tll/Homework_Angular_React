import { Component } from '@angular/core';
import { Resource } from '../models/resource.model';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  resources: Resource[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/deus-tll'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dedicateyourheart/'
    },
  ];
}
