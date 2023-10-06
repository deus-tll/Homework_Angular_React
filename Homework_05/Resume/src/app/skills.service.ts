import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  private hardSkills: string[] = [
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

  private softSkills: string[] = [
    'Високий рівень самоорганізації',
    'Навички тайм-менеджменту',
    'Комунікативні навички',
    'Навички командної роботи'
  ];

  getHardSkills = () => this.hardSkills;
  getSoftSkills = () => this.softSkills;
}
