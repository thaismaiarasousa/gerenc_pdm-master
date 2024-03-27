import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  constructor(private http: HttpClient, private cdRef: ChangeDetectorRef) { }


  imagensGaleria: any[] = [];
  // =
  // [
  //   {
  //     src: "https://scontent.cdninstagram.com/v/t51.29350-15/429042174_1595927321225530_2645386468698886006_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=8mtM6KbfjRcAX8b5A04&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDKcDvnKyVQT73F3bnprIV7DxkkneEcNFooJpwIiR6d4w&oe=66080367",
  //   },
  //   {
  //     src: "https://scontent.cdninstagram.com/v/t51.29350-15/420162276_355738890643416_1437754815203431502_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=j0tC2OOOZ1sAX9nHx9l&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAO-tog3EWpTcTCO51e5jUvPRod3lqJp7p6jcdfg7nbfw&oe=6609641D",
  //   },
  //   {
  //     src: "https://scontent.cdninstagram.com/v/t51.29350-15/416644278_370090172282825_6260771382800573088_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=kDZfKEbUMtMAX83bltC&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfCqP1I2ANdlrXC2HgHrETf-SNbfeeqpQAj0YnMT0UTdJg&oe=6609BDF8",
  //   },
  //   {
  //     src: "https://scontent.cdninstagram.com/v/t51.29350-15/408782651_333645496192797_1757676518044191496_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=RfNA7iftDzIAX-zffph&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBk41ge6uR4DqIijcdXDPT8uorw-zZJnikIWwgrJWL8MA&oe=66089A4C"
  //   }
  // ];


  ngOnInit(): void {
    this.fetchData('https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=IGQWROaEtSQXE4ZAW56cXFkaDZA4RXl3d1BJV1dmSnFMLWJoVUNycnR2T2V3aklxNFBpcDIzREdCWEZASRVdPamRNSUtyQUpkUkpRNFVORFlQNW5wdnhQenFEazRsZA2hucFdGM3czWjVqVzFRbGZAjdVRQWXZAtOHgyYlUZD')
      .subscribe((data: any) => {
        if (data && data.access_token) {
          this.fetchData('https://graph.instagram.com/me/media?fields=media_type,media_url,timestamp&access_token=' + data.access_token)
            .subscribe((dataInsta: any) => {
              let listaMedia: any[];
              listaMedia = dataInsta.data;
              this.imagensGaleria = listaMedia.filter(i => i.media_type == 'IMAGE').slice(0, 4).map(y => { return { legenda: '', src: y.media_url } });
              console.log(this.imagensGaleria)
            });
        }
      });
  }

  fetchData(rotaGet: string) {
    return this.http.get(rotaGet);
  }

  redirecionarInstagram() {
    let linkRedirecionar = `https://www.instagram.com/ciapedemanga/`;
    window.open(linkRedirecionar, '_blank');
  }
}
