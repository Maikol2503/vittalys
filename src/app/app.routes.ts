import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full' // Esto asegura que se cargue solo en la ruta raíz
  },
  {
    path: 'catalogo',
    component: CatalogoComponent
  },
  {
    path: 'servicios/:type',
    component: ServiciosComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  }
];
