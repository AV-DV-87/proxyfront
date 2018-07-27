import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SondageComponent } from './sondage/sondage.component';
import { ServiceSondageComponent } from './Services/service-sondage/service-sondage.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SondageComponent,
    ServiceSondageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
