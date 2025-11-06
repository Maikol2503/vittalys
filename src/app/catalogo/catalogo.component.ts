import { Component } from '@angular/core';
import { CatalogoService } from '../services/catalogo.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule, RouterModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  dataCatalogo: any[] = [];
  
    constructor(private catalogoService: CatalogoService) {}
  
    ngOnInit(): void {
      this.dataCatalogo = this.catalogoService.getCatalogo();
    }
}
