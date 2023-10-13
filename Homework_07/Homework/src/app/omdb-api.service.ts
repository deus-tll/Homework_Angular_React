import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OmdbApiService {
  private apiKey:string = '280e3678';
  private movie:any;

  constructor(private http: HttpClient) { }

  getMovie = (title:string, year:number | null): Observable<any> => {
    let urlShortPlot = `http://www.omdbapi.com/?apikey=${this.apiKey}&t=${title}`;
    let urlFullPlot = `http://www.omdbapi.com/?apikey=${this.apiKey}&t=${title}&plot=full`;

    if(year) {
      urlShortPlot = urlShortPlot.concat(`&y=${year}`);
      urlFullPlot = urlFullPlot.concat(`&y=${year}`);
    }

    const shortPlot$ = this.http.get(urlShortPlot);
    const fullPlot$ = this.http.get(urlFullPlot);

    return forkJoin([shortPlot$, fullPlot$]);
  };
}