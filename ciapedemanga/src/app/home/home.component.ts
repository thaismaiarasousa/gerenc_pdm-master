import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
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
export class HomeComponent {
  exibirPerguntas = false;
  nome = '';
  mensagem = '';
  aoMaximizarMinimizarPerguntas() {
    this.exibirPerguntas = !this.exibirPerguntas;
  }

  redirecionarWhatsapp() {
    let mensagemEnvio = '';
    let numeroEnvio = '5581984313316';
    
    if (this.nome && this.mensagem) {
      mensagemEnvio = `https://api.whatsapp.com/send?l=pt-BR&phone=${numeroEnvio}&text=Olá Thais, me chamo ${this.nome}! ${this.mensagem}`;
    } else if (!this.nome && this.mensagem) {
      mensagemEnvio = `https://api.whatsapp.com/send?l=pt-BR&phone=${numeroEnvio}&text=Olá Thais! ${this.mensagem}`;
    } else if (this.nome && !this.mensagem) {
      mensagemEnvio = `https://api.whatsapp.com/send?l=pt-BR&phone=${numeroEnvio}&text=Olá Thais, me chamo ${this.nome} e gostaria de saber mais sobre as aulas!`
    } else {
      mensagemEnvio = `https://api.whatsapp.com/send?l=pt-BR&phone=${numeroEnvio}&text=Olá Thais! Gostaria de saber mais sobre as aulas!`;
    }
    window.open(mensagemEnvio, '_blank');
  }
}
