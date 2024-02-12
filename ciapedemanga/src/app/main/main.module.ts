// main.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FaqComponent } from '../faq/faq.component';
import { FooterComponent } from '../footer/footer.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        MainComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        GalleryComponent,
        FaqComponent,
        ContactComponent,
    ],
    imports: [
        CommonModule, 
        RouterModule, 
        BrowserAnimationsModule
    ],
    exports: [MainComponent]
})
export class MainModule { }
