import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rest-countries-query',
  templateUrl: './rest-countries-query.component.html',
  styleUrls: ['./rest-countries-query.component.css']
})
export class RestCountriesQueryComponent implements OnInit, OnDestroy {
  parametros: any;
  paisConsulta: string;
  pais: any;

  constructor(
    private restService: RestService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.parametros = this.activatedRoute.params.subscribe(
      params => (this.paisConsulta = params['pais'])
    );
    this.getPais(this.paisConsulta);
  }

  ngOnDestroy() {
    this.parametros.unsubscribe();
  }

  getPais(pais: string) {
    this.restService.getCountry(pais).subscribe(
      data => {
        console.log(data);
        this.pais = data;
      },
      err => console.log(err)
    );
  }
}
