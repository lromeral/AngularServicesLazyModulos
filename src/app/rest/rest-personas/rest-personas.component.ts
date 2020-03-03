import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { IPersona } from '../../models/persona.interface';

@Component({
  selector: 'app-personas',
  templateUrl: './rest-personas.component.html',
  styleUrls: ['./rest-personas.component.css']
})
export class RestPersonasComponent implements OnInit {
  personas: IPersona[] = [];
  cols: any[] = [];

  constructor(private restService: RestService) {}

  ngOnInit() {
    this.cols = [
      { field: '', header: '', width: '10%' },
      { field: 'nombre', header: 'Nombre', width: '20%' },
      { field: 'apellido', header: 'Apellido', width: '20%' },
      { field: 'ciudad', header: 'Ciudad', width: '15%' },
      { field: 'email', header: 'Email', width: '25%' },
      { field: 'sueldo', header: 'Sueldo', width: '10%' }
    ];
    this.getPersonas();
  }

  getPersonas() {
    this.restService.getPersonas().subscribe(
      data => {
        console.log(data);
        this.personas = data;
      },
      err => console.log(err),
      () => console.log('OK')
    );
  }
}