import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment as ENV} from '../../environments/environment';
import { Reponse } from '../reponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReponseService {
  private apiURL: string;

  constructor(private http: HttpClient) { 
    this.apiURL = ENV.apiUrl + '/reponse';
  }

  createReponseNo(reponse: Reponse) : Observable<Reponse> {
    const url = this.apiURL + '/1';
    return this.http.post<Reponse>(url, reponse);
  }
}
