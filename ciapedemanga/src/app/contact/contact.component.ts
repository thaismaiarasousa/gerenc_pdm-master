import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  redirecionarWhatsapp() {
    let numeroEnvio = '5581983741106';
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
