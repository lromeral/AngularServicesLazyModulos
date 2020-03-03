import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RestRoutingModule, routingComponents } from './rest.routing.module';
import { TableModule } from 'primeng/table';
import { GMapModule } from 'primeng/gmap';
import { ButtonModule } from 'primeng/button';
import { RestService } from './rest.service';

@NgModule({
  imports: [
    RestRoutingModule,
    CommonModule,
    FormsModule,
    GMapModule,
    ButtonModule,
    TableModule
  ],
  declarations: [routingComponents],
  providers: [RestService]
})
export class RestModule {}