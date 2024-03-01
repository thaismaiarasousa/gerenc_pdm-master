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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { CarrosselComponent } from '../carrossel/carrossel.component';
import { BrowserModule } from '@angular/platform-browser';
import {
    NguCarousel,
    NguCarouselDefDirective,
    NguCarouselNextDirective,
    NguCarouselPrevDirective,
    NguItemComponent,
    NguTileComponent
  } from '@ngu/carousel';
  import { GirassolComponent } from '../girassol/girassol.component';
  import { TresPontinhosComponent } from '../tres-pontinhos/tres-pontinhos.component';

@NgModule({
    declarations: [
        MainComponent,
        CarrosselComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        GalleryComponent,
        FaqComponent,
        ContactComponent,
        GirassolComponent,
        TresPontinhosComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        NguCarousel, 
        NguTileComponent,   
        NguCarousel,
        NguCarouselDefDirective,
        NguCarouselNextDirective,
        NguCarouselPrevDirective,
        NguItemComponent,
    ],
    exports: [MainComponent]
})
export class MainModule { }
