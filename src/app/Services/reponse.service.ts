import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as ENV} from '../../environments/environment';
import { Reponse } from '../reponse';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {
  private apiURL: string;

  constructor(private http: HttpClient) { 
    this.apiURL = ENV.apiUrl + '/reponse';
  }

  createReponseNo(reponse: Reponse) : Observable<Reponse> {
    result = new Subject<Reponse>;
    const url = this.apiURL + '/negative/1';
    return this.http.post<Reponse>(url, reponse);
  }
}
