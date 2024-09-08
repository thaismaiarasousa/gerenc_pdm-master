import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { provideRouter, RouterModule } from '@angular/router';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { routes } from './app.routes';
import { AngularFireModule } from '@angular/fire/compat';

const isDev = false;
let firebaseConfig = {};

if (isDev) {
  firebaseConfig = {
    apiKey: "AIzaSyD81Z0bOunn8Ckr9AiERBcvVLK4y-is8Ng",
    authDomain: "cia-pedemanga-armazenamento.firebaseapp.com",
    databaseURL: "https://cia-pedemanga-armazenamento-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cia-pedemanga-armazenamento",
    storageBucket: "cia-pedemanga-armazenamento.appspot.com",
    messagingSenderId: "311266150333",
    appId: "1:311266150333:web:5c17912c895f25b821f4d4",
    measurementId: "G-CL5EK33NZL",
  }
} else {
  firebaseConfig = {
    apiKey: "AIzaSyBylnslZqzsXhxaqI-FPpETHfzJtnAliTE",
    authDomain: "calendario-pdm.firebaseapp.com",
    databaseURL: "https://calendario-pdm-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "calendario-pdm",
    storageBucket: "calendario-pdm.appspot.com",
    messagingSenderId: "470639101845",
    appId: "1:470639101845:web:081db792c2186c7fd8989c",
    measurementId: "G-9FDMRJ6MDJ"
  }
}
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MainModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ]
})
export class AppModule { }
