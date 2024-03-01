import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarrosselComponent implements OnInit {
  imgags = [
    './assets/galeria/mostra_danca_aerea.png',
    './assets/galeria/mostra_danca_aerea.png',
    './assets/galeria/mostra_danca_aerea.png',
    './assets/galeria/mostra_danca_aerea.png'
  ];

  public carouselTileItems: Array<any> = this.imgags;
  public carouselTiles: any = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 2, sm: 2, md: 3, lg: 3, all: 0 },
    slide: 3,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };
  constructor() { }

  ngOnInit() {
    this.carouselTileItems.forEach(el => {
      this.carouselTileLoad(el);
    });
  }

  public carouselTileLoad(j: any) {
    const len = this.carouselTiles[j]?.length;
    if (len <= 30) {
      for (let i = len; i < len + 15; i++) {
        this.carouselTiles[j].push(
          this.imgags[Math.floor(Math.random() * this.imgags?.length)]
        );
      }
    }
  }
}

