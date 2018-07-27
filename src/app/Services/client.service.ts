import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {environment as ENV} from '../../environments/environment';
import { Client } from '../client';
import { Observable, Subject } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = ENV.apiUrl + '/client'
  }

  creat(client:Client): Observable<Client>{
    let result = new Subject<Client>()
    this.httpClient.post<Client>(this.apiUrl, client)
    .subscribe((newClient)=>{
      result.complete();
    }, (response: HttpErrorResponse) => {
      result.error(response.message);
    });

    return result;
  }

  
}
