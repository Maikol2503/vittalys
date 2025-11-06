import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  onSubmit(e: Event) {
    e.preventDefault();
    alert('Mensaje enviado correctamente. Gracias por contactarnos.');
  }
}
