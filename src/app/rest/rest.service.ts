import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IPersona } from '../models/persona.interface';

@Injectable()
export class RestService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>('https://restcountries.eu/rest/v2/all');
  }

  getCountry(pais: string): Observable<any[]> {
    return this.http.get<any[]>(
      'https://restcountries.eu/rest/v2/name/' + pais + '?fullText=true'
    );
  }

  getPersonas(): Observable<IPersona[]> {
    return this.http.get<any[]>('assets/personas.json');
  }

  getInfoMeteo(latitud: number, longitud: number): Observable<any[]> {
    return this.http.get<any[]>(
      'http://api.openweathermap.org/data/2.5/forecast/daily?lat=' +
        latitud +
        '&lon=' +
        longitud +
        '&units=metric&lang=es&cnt=10&appid=4762a050332f537f16d744fe848dfb3e'
    );
  }
}
