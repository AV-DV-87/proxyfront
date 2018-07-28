import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {environment as ENV} from '../../environments/environment';
import { Client } from '../client';
import { Observable, Subject } from '../../../node_modules/rxjs';
import { Reponse } from '../reponse';
import { HttpResponse } from '../../../node_modules/@types/selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl: string;
  private clientNumber:Client;
  private found:boolean;


  constructor(private httpClient: HttpClient) {
    this.apiUrl = ENV.apiUrl + '/client';
  }

  creat(client:Client): Observable<Client>{
    let result = new Subject<Client>();
    this.httpClient.post<Client>(this.apiUrl, client)
    .subscribe((newClient)=>{
      result.complete();
    }, (response: HttpErrorResponse) => {
      result.error(response.message);
    });

    return result;
  }

 find(client: Client): boolean{
   let found: boolean;
   let result = new Subject<string>();
   this.httpClient.get<string>(this.apiUrl + '/find/'+ client.numero)
   .subscribe((rep)=>{
    //  this.found = rep;
     console.log(found);
     result.complete();
   }, (response : HttpErrorResponse) => {
    result.error(response.message);
  });
  console.log(found);
  return found;
}

}
