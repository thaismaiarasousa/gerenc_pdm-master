import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  redirecionarWhatsapp() {
    let numeroEnvio = '5581983741106';
    let linkRedirecionar = `https://api.whatsapp.com/send?l=pt-BR&phone=${numeroEnvio}&text=Olá Thais! Gostaria de saber mais sobre as aulas!`;
    window.open(linkRedirecionar, '_blank');
  }

  redirecionarInstagram() {
    let linkRedirecionar = `https://www.instagram.com/ciapedemanga/`;
    window.open(linkRedirecionar, '_blank');
  }

  redirecionarYoutube() {
    let linkRedirecionar = 'https://www.youtube.com/channel/UC-SeqbUnDs05HAHhEJ_O0xg';
    window.open(linkRedirecionar, '_blank');
  }

  redirecionarMaps() {
    let linkRedirecionar = 'https://maps.app.goo.gl/5GJvEvq7VVhGFahi8';
    window.open(linkRedirecionar, '_blank');
  }
}
