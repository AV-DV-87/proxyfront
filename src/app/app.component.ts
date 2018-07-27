import { Component } from '@angular/core';
import { Client } from './client';
import { ClientService } from './Services/client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  editClient: Client;

  constructor(){
  
  }

 
}
