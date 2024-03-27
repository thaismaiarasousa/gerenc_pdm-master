import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FaqComponent } from '../faq/faq.component';
import { FooterComponent } from '../footer/footer.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { HeaderComponent } from '../header/header.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
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
import { MatExpansionModule } from '@angular/material/expansion';
import { ProductionsComponent } from '../productions/productions.component';
import { HomeComponent } from '../home/home.component';
import { IdealizadoraComponent } from '../idealizadora/idealizadora.component';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
    declarations: [
        MainComponent,
        CarrosselComponent,
        HeaderComponent,
        FooterComponent,
        LandingPageComponent,
        AboutComponent,
        GalleryComponent,
        FaqComponent,
        ContactComponent,
        GirassolComponent,
        ProductionsComponent,
        HomeComponent,
        IdealizadoraComponent
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
        MatExpansionModule,
        HttpClientModule
    ],
    exports: [MainComponent]
})
export class MainModule { }
