import { Component } from '@angular/core';
import { NavComponent } from '../shared/nav/nav.component';
import { NavInfoComponent } from '../shared/nav-info/nav-info.component';
import { CommonModule } from '@angular/common';
import { MapaComponent } from "../shared/mapa/mapa.component";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as L from 'leaflet';
import { CatalogoService } from '../services/catalogo.service';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NavComponent, NavInfoComponent, CommonModule, MapaComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

  dataCatalogo: any[] = [];

  constructor(private catalogoService: CatalogoService) {}

  ngOnInit(): void {
    this.dataCatalogo = this.catalogoService.getCatalogo();
  }
}
