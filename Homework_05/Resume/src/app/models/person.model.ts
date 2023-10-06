export class PersonalInfo {
  photoPath: string;
  name: string;
  lastName: string;
  patronymic: string;
  phoneNumber: string;
  country: string;
  city: string;
  about: string;

  constructor(photoPath: string, name:string, lastName: string, patronymic: string, phoneNumber: string, country: string, city:string, about:string){
    this.photoPath = photoPath;
    this.name = name;
    this.lastName = lastName;
    this.patronymic = patronymic;
    this.phoneNumber = phoneNumber;
    this.country = country;
    this.city = city;
    this.about = about;
  }
}