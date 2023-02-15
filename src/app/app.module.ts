import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import { AppComponent } from './app.component';
import { CardAdComponent } from './components/card-ad/card-ad.component';
import { HeaderComponent } from './header/header/header.component';
import { AnswersComponent } from './components/answers/answers.component';
import { SavedAdsComponent } from './components/saved-ads/saved-ads.component';
import { AddAdsComponent } from './components/add-ads/add-ads.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    CardAdComponent,
    HeaderComponent,
    AnswersComponent,
    SavedAdsComponent,
    AddAdsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InputTextModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
