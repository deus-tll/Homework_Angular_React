export class Photo {
  photo_url: string;
  text: string;

  constructor(photo_url: string, text: string){
    this.photo_url = photo_url;
    this.text = text;
  }
}