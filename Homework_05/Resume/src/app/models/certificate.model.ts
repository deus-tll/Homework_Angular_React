export class Certificate {
  date:Date;
  text:string;
  url:string;

  constructor (date:Date, text:string, url:string) {
    this.date = date;
    this.text = text;
    this.url = url;
  }
}