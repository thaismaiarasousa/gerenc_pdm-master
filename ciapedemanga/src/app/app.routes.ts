import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {
      path: '',
      component: MainComponent,
      children: [
        { path: 'home', component: HomeComponent },
        { path: 'sobre', component: AboutComponent },
        { path: 'galeria', component: GalleryComponent },
        { path: 'perguntas', component: FaqComponent },
        { path: 'contato', component: ContactComponent },
      ]
    }
  ];