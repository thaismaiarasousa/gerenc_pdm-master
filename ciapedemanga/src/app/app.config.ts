import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

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
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth(),
    ), provideAnimationsAsync(),
     provideClientHydration()
  ]
};
