import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-rest-meteo',
  templateUrl: './rest-meteo.component.html',
  styleUrls: ['./rest-meteo.component.css']
})
export class RestMeteoComponent implements OnInit {
  infoMeteo: any;
  latitud: number;
  longitud: number;

  constructor(private restService: RestService) {}

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitud = position.coords.latitude;
        this.longitud = position.coords.longitude;
        this.getInfoMeteo();
      });
    }
  }

  getInfoMeteo() {
    this.restService.getInfoMeteo(this.latitud, this.longitud).subscribe(
      data => {
        console.log(data);
        this.infoMeteo = data;
      },
      err => console.log(err),
      () => console.log('OK')
    );
  }
}
