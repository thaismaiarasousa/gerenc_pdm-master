import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MainModule } from './main/main.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    MainModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
