import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as ENV } from '../../environments/environment';
import { Sondage } from '../sondage';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SondageServiceService {

  private apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl= ENV.apiUrl + '/sondage';
  }

  getSondage(): Observable<Sondage> {
    let url = this.apiUrl;
    return this.httpClient.get<Sondage>(url);
  }

}
