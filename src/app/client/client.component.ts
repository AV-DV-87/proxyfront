import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Client } from '../client';
import { NgForm } from '@angular/forms';
import { ClientService } from '../Services/client.service';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})

export class ClientComponent implements OnInit {

  @Input() client:Client
  @Output() onCreate: EventEmitter<Client>
  private model: Client;
  private clientNum: Client;
  public found : boolean;

  constructor(private service: ClientService) {
    this.model = new Client();
    this.onCreate = new EventEmitter();
   
   }

  ngOnInit() {
    this.model = new Client();
    this.clientNum = new Client();
    //this.clientNum.numero = '';

  }

  submit(form: NgForm){
    let data: Client = JSON.parse(JSON.stringify(this.model));
    this.onCreate.emit(data);
    this.service.creat(data);
    form.resetForm();
  }

  submitNum(form: NgForm){
    let data: Client = JSON.parse(JSON.stringify(this.clientNum));
    //this.onFind.emit(data);
    
    this.service.find(data).subscribe(
      (toto) =>{ this.found = toto;
        console.log(this.found);
      }
    );
    console.log(this.found);
    form.resetForm();
  }


  
}
