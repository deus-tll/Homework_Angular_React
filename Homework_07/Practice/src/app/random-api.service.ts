import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RandomApiResponse } from './interfaces/random-api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class RandomApiService {
  apiKey:string = 'ed245a59-c2f5-48f0-b351-74debcf4a138';

  constructor(private http: HttpClient) { }

  generateNumbers = (min:number, max:number, count:number): Observable<RandomApiResponse> => {
    const apiUrl = 'https://api.random.org/json-rpc/4/invoke';

    const requestData = {
      jsonrpc: '2.0',
      method: 'generateIntegers',
      params: {
        apiKey: this.apiKey,
        n: count,
        min: min,
        max: max
      },
      id: 1111
    };

    return this.http.post<RandomApiResponse>(apiUrl, requestData);
  }
}
