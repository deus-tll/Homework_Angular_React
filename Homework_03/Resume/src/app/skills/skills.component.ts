import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  hardSkills: string[] = [
    'OOP, SOLID',
    'C++, STL',
    'C# (Basics/System/Network Programming)',
    'ASP.NET Core, MVC, Blazor, Razor Pages, WPF, Windows Forms',
    'MSSQL, ADO.NET, Dapper, Entity Framework',
    'HTML, CSS, JavaScript',
    'VCS Git',
    'Знання алгоритмів і структур данних',
    'Вирішення проблем'
  ];

  softSkills: string[] = [
    'Високий рівень самоорганізації',
    'Навички тайм-менеджменту',
    'Комунікативні навички',
    'Навички командної роботи'
  ];
}
