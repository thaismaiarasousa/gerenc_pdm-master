import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  imagensGaleria = [
    'https://scontent.cdninstagram.com/v/t51.29350-15/429042174_1595927321225530_2645386468698886006_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=18de74&_nc_ohc=qIJITCjVHEEAX_vyN2v&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDhEdgy3xxX79Wz8-wry61-dnf8o1JldADlh7PNAQs_7g&oe=65E85F67',
    'https://scontent.cdninstagram.com/v/t51.29350-15/420162276_355738890643416_1437754815203431502_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=ZY1d3MbWclQAX8iBuCH&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDTD52x44KZGVbowshEITm2BrHHms1WdikiSaKT8S5qog&oe=65E7C5DD',
    'https://scontent.cdninstagram.com/v/t51.29350-15/416644278_370090172282825_6260771382800573088_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=18de74&_nc_ohc=4f0cCgCLN74AX_7utrv&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDo-vWG1ExkBgVxIfw1JYKwd2Gw7AMktMr1Iw7hB10sAA&oe=65E81FB8',
    'https://scontent.cdninstagram.com/v/t51.29350-15/408782651_333645496192797_1757676518044191496_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=YDb0IlQFbScAX9kkfky&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAOLv4a1UwH6CUqPHNqNBlT60RhjJ0qP4IHi7Vue8M1XA&oe=65E8F64C'
  ];

  redirecionarInstagram() {
    let linkRedirecionar = `https://www.instagram.com/ciapedemanga/`;
    window.open(linkRedirecionar, '_blank');
  }
}
