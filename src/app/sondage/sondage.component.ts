import { Component, OnInit, Input } from '@angular/core';
import { SondageServiceService } from '../Services/sondage-service.service';
import { Sondage } from '../sondage';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.css']
})
export class SondageComponent implements OnInit {

  @Input() sondage: Sondage;

  constructor(private sondageService: SondageServiceService) { }

  ngOnInit() {
    this.sondageService.getSondage().subscribe((sondage) => this.sondage = sondage);
  }

}
