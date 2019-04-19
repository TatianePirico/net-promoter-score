import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NetPromoterScoreComponent } from './net-promoter-score/net-promoter-score.component';
import { ModalComponent } from './modal/modal.component';

import { HttpClientModule } from '@angular/common/http';
import { NPSService } from './shared/services/nps.service';

@NgModule({
  declarations: [
    AppComponent,
    NetPromoterScoreComponent,
    ModalComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [NPSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
