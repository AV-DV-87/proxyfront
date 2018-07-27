import { Component, OnInit, Input } from '@angular/core';
import { Sondage } from '../sondage';
import { SondageServiceService } from '../Services/sondage-service.service';

@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.css']
})
export class SondageComponent implements OnInit {

  @Input() sondage: Sondage;

  constructor(private sondageService: SondageServiceService) { }

  ngOnInit() {
    this.sondageService.getSondage()
  }

}
