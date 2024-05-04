import { Component } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrl: './evento.component.scss'
})
export class EventoComponent {

  comprarIngresso() {
    window.open('https://forms.gle/gY65DesVEYksm7Hq5', '_blank');
  }
}
