import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MainComponent } from './main/main.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CalendarComponent } from './calendar/calendar.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: LandingPageComponent },
      { path: 'sobre', component: AboutComponent },
      { path: 'galeria', component: GalleryComponent },
      { path: 'perguntas', component: FaqComponent },
      { path: 'contato', component: ContactComponent },
      { path: 'calendario', component: CalendarComponent },
    ]
  }
];