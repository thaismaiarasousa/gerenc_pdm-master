import { Component, ChangeDetectionStrategy, OnInit, Input } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';
@Component({
  selector: 'app-carrossel',
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarrosselComponent implements OnInit {
  @Input() listaImagens!: any[];
  @Input() corBorda!: string;

  imgags: string[] = [];

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
    grid: { xs: 1, sm: 1, md: 1, lg: 2, all: 0 },
    slide: this.listaImagens?.length,
    speed: 250,
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };
  hoveredIndex: number | null = null;

  constructor() { }

  ngOnInit() {
    this.imgags = this.listaImagens;
    this.carouselTileItems = this.imgags;
    this.carouselTile.slide = this.imgags?.length;
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

  hoverIn(index: number) {
    this.hoveredIndex = index;
  }

  hoverOut(index: number) {
    this.hoveredIndex = null;
  }

}

