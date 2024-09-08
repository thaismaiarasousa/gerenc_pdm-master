import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  constructor(private http: HttpClient, private cdRef: ChangeDetectorRef) { }


  imagensGaleria: any[] = [];

  ngOnInit(): void {
    this.fetchData('https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=' + environment.tokenGraph)
      .subscribe((data: any) => {
        if (data && data.access_token) {
          this.fetchData('https://graph.instagram.com/me/media?fields=media_type,media_url,timestamp&access_token=' + data.access_token)
            .subscribe((dataInsta: any) => {
              let listaMedia: any[];
              listaMedia = dataInsta.data;
              this.imagensGaleria = listaMedia.filter(i => i.media_type == 'IMAGE').slice(0, 4).map(y => { return { legenda: '', src: y.media_url } });
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
