import { Component } from '@angular/core';

@Component({
  selector: 'app-productions',
  templateUrl: './productions.component.html',
  styleUrl: './productions.component.scss'
})
export class ProductionsComponent {
  corDaBorda = '#f18bb8';
  imagensGaleria = [
    {
      legenda: 'Ninho da Garça',
      src: 'assets/fotos/NINHO DA GARÇA.jpg',
    },
    {
      legenda: 'Varieté dos Sonhos',
      src: 'assets/fotos/VARIETÉ DOS SONHOS.jpg'
    }
  ];
}
