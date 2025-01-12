import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  animations:
    [trigger('expandCollapse', [
      state('collapsed', style({
        height: '0',
        opacity: 0,
        overflow: 'hidden'
      })),
      state('expanded', style({
        height: '*',
        opacity: 1,
        overflow: 'visible'
      })),
      transition('collapsed <=> expanded', animate('900ms ease-in-out'))
    ])]
})
export class FaqComponent {
  redirecionarWhatsapp() {
    let numeroEnvio = '5581983741106';
    let linkRedirecionar = `https://api.whatsapp.com/send?l=pt-BR&phone=${numeroEnvio}&text=Olá Thais! Gostaria de saber mais sobre as aulas!`;
    window.open(linkRedirecionar, '_blank');
  }
}
