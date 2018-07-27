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

  @Input() sondage: Observable<Sondage>;

  constructor(private sondageService: SondageServiceService) { }

  ngOnInit() {
    this.sondage = this.sondageService.getSondage();
  }

}
