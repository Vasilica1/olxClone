import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import { AppComponent } from './app.component';
import { CardAdComponent } from './components/card-ad/card-ad.component';
import { HeaderComponent } from './header/header/header.component';
import { AnswersComponent } from './components/answers/answers.component';
import { SavedAdsComponent } from './components/saved-ads/saved-ads.component';
import { AddAdsComponent } from './components/add-ads/add-ads.component';

@NgModule({
  declarations: [
    AppComponent,
    CardAdComponent,
    HeaderComponent,
    AnswersComponent,
    SavedAdsComponent,
    AddAdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
