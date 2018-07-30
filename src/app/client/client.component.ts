import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Client } from '../client';
import { NgForm } from '@angular/forms';
import { ClientService } from '../Services/client.service';
import { Sondage } from '../sondage';
import { DatePipe } from '../../../node_modules/@angular/common';



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {

  @Input() client:Client
  @Output() onCreate: EventEmitter<Client>
  @Output() onFind: EventEmitter<Client>
  @Input() sondage: Sondage
  private newClient: Client;
  private clientSearch: Client;
  public found : Client;
  private jourContact: number;

  constructor(private service: ClientService) {
    this.onCreate = new EventEmitter();
    this.onFind = new EventEmitter();
   
   }

  ngOnInit() {
    this.newClient = new Client();
    this.clientSearch = new Client();
    //this.clientSearch.numero = '';
    console.log(this.newClient);
    console.log(this.clientSearch);
    console.log(this.sondage.dateFin);
  }

  submit(form: NgForm){
    let data: Client = JSON.parse(JSON.stringify(this.newClient));
    this.onCreate.emit(data);
    this.service.creat(data).subscribe((newClient) =>{
      this.newClient = newClient;
      console.log(newClient);
    });
    form.resetForm();
  }

  submitNum(form: NgForm){
    // let data: Client = JSON.parse(JSON.stringify(this.clientSearch));
    // this.onFind.emit(data);
    // this.service.find(data).subscribe(
    //   (found) =>{ this.found = found;
    //     console.log(this.found);                
    //   }
    // );
    this.service.find(this.clientSearch).subscribe((clientSearch) => {
      this.clientSearch = clientSearch;
      console.log(this.clientSearch);
    });
    form.resetForm();
    console.log(this.clientSearch);
  }

  calculDiffJour(dateFin: DatePipe){
    let jourContact: number;
    // calcul différence entre dateFin du sondage en cours et dateActuelle
    let ActualDate = Date.now;
    
    return null;
  }
  
}
