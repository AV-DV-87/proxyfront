import { Component, Output } from '@angular/core';
import { Sondage } from './sondage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Output() sondage: Sondage;


  title = 'app';

}
