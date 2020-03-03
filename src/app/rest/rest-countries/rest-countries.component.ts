import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { Router } from '@angular/router';

// No es necesario si instalamos tipos
// declare var google: any;

@Component({
  selector: 'app-rest-countries',
  templateUrl: './rest-countries.component.html',
  styleUrls: ['./rest-countries.component.css']
})
export class RestCountriesComponent implements OnInit {
  paises: any[] = [];
  cols: any[];
  paisElegido = '';
  lat: number;
  lng: number;
  title: string;

  options: any;

  overlays: any[];

  constructor(private restService: RestService, private router: Router) {}

  ngOnInit() {
    this.cols = [
      { field: '', header: '', width: '10%' },
      { field: 'name', header: 'País', width: '25%' },
      { field: 'capital', header: 'Capital', width: '25%' },
      { field: 'population', header: 'Habitantes', width: '15%' },
      { field: 'region', header: 'Continente', width: '15%' },
      { field: '', header: '', width: '5%' },
      { field: '', header: '', width: '5%' }
    ];

    this.lat = 36.890257;
    this.lng = 30.707417;
    this.title = 'Pamplona';
    this.options = {
      center: { lat: this.lat, lng: this.lng },
      zoom: 4
    };
    this.initOverlays();

    this.getPaises();
  }

  initOverlays() {
    this.overlays = [
      new google.maps.Marker({
        position: { lat: this.lat, lng: this.lng },
        title: this.title
      })
    ];
  }

  getPaises() {
    this.restService.getCountries().subscribe(
      data => {
        console.log(data);
        this.paises = data;
      },
      err => console.log(err),
      () => console.log('OK')
    );
  }

  verInfoPais() {
    this.router.navigateByUrl('rest/restCountriesQuery/' + this.paisElegido);
  }

  verPais(pais: any) {
    this.router.navigateByUrl('rest/restCountriesQuery/' + pais.name);
  }

  geoLocalizar(map: any, pais: any) {
    this.lat = parseFloat(pais.latlng[0]);
    this.lng = parseFloat(pais.latlng[1]);
    this.title = pais.name;
    this.options = {
      center: { lat: this.lat, lng: this.lng },
      zoom: 4
    };
    map.setOptions(this.options);
    this.initOverlays();
  }
}
