import { Component } from '@angular/core';

@Component({
  selector: 'app-productions',
  templateUrl: './productions.component.html',
  styleUrl: './productions.component.scss'
})
export class ProductionsComponent {
  corDaBorda = '#f18bb8';
  imagensGaleria = [
    'assets/fotos/NINHO DA GARÇA.jpg',
    'assets/fotos/VARIETÉ DOS SONHOS.jpg'
  ];
}
