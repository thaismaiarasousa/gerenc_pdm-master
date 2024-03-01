import { Component } from '@angular/core';

@Component({
  selector: 'app-girassol',
  templateUrl: './girassol.component.html',
  styleUrl: './girassol.component.scss'
})
export class GirassolComponent {

  petalas: number[] = Array.from({ length: 18 }, (_, i) => i); 
  petalaBlocos: number[] = Array.from({ length: 1 }, (_, i) => i);

}
