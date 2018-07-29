import { Component, OnInit } from '@angular/core';
import { Reponse } from '../reponse';
import { NgForm } from '../../../node_modules/@angular/forms';
import { ReponseService } from '../Services/reponse.service';

@Component({
  selector: 'app-reponse',
  templateUrl: './reponse.component.html',
  styleUrls: ['./reponse.component.css']
})
export class ReponseComponent implements OnInit {
  private model: Reponse;

  constructor(private service : ReponseService) { }

  ngOnInit() {
    this.model = new Reponse();
  }

  submitComent(form : NgForm){
    //format de saisie à JSON
    let data : Reponse = JSON.parse(JSON.stringify(this.model));
    //utilisation du service
    this.service.createReponseNo(data);
    form.resetForm();
  }

}
