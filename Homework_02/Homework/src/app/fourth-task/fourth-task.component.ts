import { Component } from '@angular/core';
import { Resource } from '../models/resource.model';

@Component({
  selector: 'app-fourth-task',
  templateUrl: './fourth-task.component.html',
  styleUrls: ['./fourth-task.component.css']
})
export class FourthTaskComponent {
  resources: Resource[] = [
    { 
      name: 'Article on Wikipedia', 
      url: 'https://en.wikipedia.org/wiki/Bill_Gates'
    },
    { 
      name: 'Gates Foundation', 
      url: 'https://www.gatesfoundation.org/'
    },
    { 
      name: 'Gates Notes', 
      url: 'https://www.gatesnotes.com/'
    },
    { 
      name: 'Bill Gates\' Twitter', 
      url: 'https://twitter.com/billgates'
    },
  ];
}
