import { Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  exibirPerguntas = false;

  public divTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const isWideScreen = window.innerWidth >= 1000;
    const isAtTop = window.scrollY === 0;
    
    if (isWideScreen) {
      this.divTop = isAtTop ? 0 : (this.divTop === 15 && isAtTop) ? 0 : 15;
    } else {
      this.divTop = 0;
    }
  }

  redirecionarWhatsapp() {
    let numeroEnvio = '5581983741106';
    let linkRedirecionar = `https://api.whatsapp.com/send?l=pt-BR&phone=${numeroEnvio}&text=Olá Thais! Gostaria de saber mais sobre as aulas!`;
    window.open(linkRedirecionar, '_blank');
  }
}
