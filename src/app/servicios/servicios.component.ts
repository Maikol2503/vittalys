import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogoService } from '../services/catalogo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  servicio: any; // Aquí se guardará el servicio obtenido
  type!: string; // parámetro obtenido de la URL

  constructor(
    private route: ActivatedRoute,
    private catalogoService: CatalogoService
  ) {}

  ngOnInit(): void {
    // 1️⃣ Tomamos el parámetro de la URL
    this.type = this.route.snapshot.paramMap.get('type') || '';

    // 2️⃣ Buscamos el servicio correspondiente
    this.servicio = this.catalogoService.getServicioByType(this.type)[0];

    // 3️⃣ (Opcional) Log para verificar que está trayendo los datos correctos
    console.log('Servicio seleccionado:', this.servicio);
  }

  onSubmit(e: Event) {
    e.preventDefault();
    alert('Gracias por contactarnos. Te responderemos pronto.');
  }
}
