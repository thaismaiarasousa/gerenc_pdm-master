import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-home-copy',
  templateUrl: './home-copy.component.html',
  styleUrl: './home.component.scss',
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
export class HomeBackuptwoComponent  {
  exibirPerguntas = false;

  aoMaximizarMinimizarPerguntas() {
    this.exibirPerguntas = !this.exibirPerguntas;
  }

  redirecionarWhatsapp() {
    let numeroEnvio = '5581984313316';
    let linkRedirecionar = `https://api.whatsapp.com/send?l=pt-BR&phone=${numeroEnvio}&text=Olá Thais! Gostaria de saber mais sobre as aulas!`;
    window.open(linkRedirecionar, '_blank');
  }
  
  redirecionarInstagram() {
    let linkRedirecionar = `https://www.instagram.com/ciapedemanga/`;
    window.open(linkRedirecionar, '_blank');
  }
  
  redirecionarEmail() {
    let linkRedirecionar = `mailto:ciapedemanga@gmail.com?subject=${encodeURIComponent('teste')}&body=${encodeURIComponent('testebody')}`;
    window.open(linkRedirecionar, '_blank');
  }
  
  redirecionarMaps() {
    let linkRedirecionar = 'https://maps.app.goo.gl/5GJvEvq7VVhGFahi8';
    window.open(linkRedirecionar, '_blank');
  }
}
