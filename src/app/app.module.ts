import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SondageComponent } from './sondage/sondage.component';
import { ReponseComponent } from './reponse/reponse.component';
import { ClientComponent } from './client/client.component';
import { ClientService } from './Services/client.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SondageComponent,
    ReponseComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
