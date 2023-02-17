import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { ReactiveFormsModule } from '@angular/forms';


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
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBQYWZH_OmxTqnJjDBZR8u9Hdu4zT9Sspc",
      authDomain: "olxclone-610fc.firebaseapp.com",
      databaseURL: "https://olxclone-610fc-default-rtdb.firebaseio.com",
      projectId: "olxclone-610fc",
      storageBucket: "olxclone-610fc.appspot.com",
      messagingSenderId: "947945429301",
      appId: "1:947945429301:web:b31068bf79ec428c0b547c",
      measurementId: "G-CK01MGRFE2"
    }),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
