import './components/personal-info/PersonalInfo.css'
import { PersonalInfo } from "./components/personal-info/PersonalInfo";
import { WorkInfo } from './components/work-info/WorkInfo';

import Photo from './assets/my-photo.jpg';

const SecondTask = () => {
  const personalInfo = {
    photo: Photo,
    name: 'Артем',
    lastName: 'Міллер',
    patronymic: 'Валерійович',
    phoneNumber: '+380958171340',
    country: 'Україна',
    city: 'Очаків',
    about: "Я - C# розробник-початківець, який шукає роботу на позиції C# Trainee Developer. Хоча у мене немає комерційного досвіду роботи в цій галузі, я швидко навчаюсь і дуже відданий роботі. Раніше я мав справу з невеликими локальними проектами з різних направлень в області .NET, але дуже бажаю попрацювати над реальними і цікавим задачами, що саме головне - у команді. Моя сміливість та мотивація до навчання допоможуть мені вдосконалити свої навички та бути більш корисним на цій посаді. Крім того, завдяки моїй відданості роботі, я можу вчитися достатньо швидко та наполегливо."
  };

  const hardSkills = [
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

  const softSkills = [
    'Високий рівень самоорганізації',
    'Навички тайм-менеджменту',
    'Комунікативні навички',
    'Навички командної роботи'
  ];

  const experiences = [
    {
      dateFrom: new Date(2021, 11, 30),
      dateTo: 'Now',
      text: "Студент. Комп'ютерна академія STEP. Направлення - розробка програмного забезпечення."
    }
  ];

  const certificates = [
    {
      date: new Date(2022, 6, 21),
      text: "\"IT Essentials\" Issued by Cisco",
      url: 'https://www.credly.com/badges/121041e2-91f2-4c0f-902b-b4d6639ce43f?source=linked_in_profile'
    }
  ];

  return (
    <>
      <PersonalInfo 
      photo={personalInfo.photo}
      name={personalInfo.name}
      lastName={personalInfo.lastName}
      patronymic={personalInfo.patronymic}
      phoneNumber={personalInfo.phoneNumber}
      country={personalInfo.country}
      city={personalInfo.city}
      about={personalInfo.about} /> 

      <WorkInfo 
      hardSkills={hardSkills}
      softSkills={softSkills} 
      experiences={experiences} 
      certificates={certificates}/>
      
    </>
  );
};

export default SecondTask;