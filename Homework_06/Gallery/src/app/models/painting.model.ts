export class Painting {
  id: number;
  name:string;
  year:number;
  author:string;
  height:number;
  width:number;
  location:string;
  url:string;

  constructor (id: number, name:string, year:number, author:string, height:number, width:number, location:string, url:string) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.author = author;
    this.height = height;
    this.width = width;
    this.location = location;
    this.url = url;
  }
}