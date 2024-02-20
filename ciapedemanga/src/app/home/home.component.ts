import { Component, HostListener, Renderer2, ElementRef, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private renderer: Renderer2, private el: ElementRef) { }
  inclina: number = 316;
  lastScrollPosition: number = 0;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {

    // Executar a lógica de rotação a cada 100 scrolls
    const currentScrollPosition = window.scrollY;
    console.log('curretn', currentScrollPosition);
    console.log('last', this.lastScrollPosition);
    if (window.scrollY % 200 === 0 && currentScrollPosition < 400) {
      if (currentScrollPosition > this.lastScrollPosition) {
        // Scroll para baixo
        this.inclina = this.inclina - 10; // Reduz a inclinação
      } else if (currentScrollPosition < this.lastScrollPosition) {
        // Scroll para cima
        this.inclina = this.inclina + 10; // Aumenta a inclinação até -45
      }
      this.lastScrollPosition = currentScrollPosition;
    }


  }

  @HostBinding('attr.style')
  public get cssVars() {
    return `
    --inclinacao: ${this.inclina}deg;
  `;
  }
}