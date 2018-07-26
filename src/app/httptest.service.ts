import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as ENV} from '../environments/environment';
import {Observable, Subject} from 'rxjs';
import {Reponse} from './reponse';

@Injectable({
  providedIn: 'root'
})
export class HttptestService {
  private apiUrl: string;

  // instanciation d'un client http
  constructor(private httpClient: HttpClient) {
    this.apiUrl = ENV.apiUrl + '/reponse';
  }

  createRepoonse(reponse: Reponse): Observable<Reponse> {
    const result = new Subject<Reponse>();
    this.httpClient.post<Reponse>(this.apiUrl, reponse)
      .subscribe((newReponse)=> {
      }
      })
    return result;
  }
}
