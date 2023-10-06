export class Experience {
  dateFrom:Date;
  dateTo:any;
  text:string;

  constructor (dateFrom:Date, dateTo:any, text:string) {
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
    this.text = text;
  }
}