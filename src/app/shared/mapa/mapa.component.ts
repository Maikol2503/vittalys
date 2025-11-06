import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent implements AfterViewInit{

  ngAfterViewInit(): void {
    this.initMap();
  }
  private map!: L.Map;

  private initMap(): void {

    window.addEventListener('resize', () => {
  this.map.invalidateSize();
});

  this.map = L.map('mapId', {
    center: [40.40508601553331, -3.604028085356422],
    zoom: 13,
    dragging: true,
    scrollWheelZoom: false,
    touchZoom: true,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(this.map);

  const customIcon = L.icon({
    iconUrl: 'https://i.imgur.com/PzlZTyO.png',
    iconSize: [150, 40],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  const marker = L.marker([40.40508601553331, -3.604028085356422], { icon: customIcon }).addTo(this.map);
  marker.bindPopup('¡Bienvenidos!').openPopup();

  // 👇 Esto soluciona el problema de los cuadros
  setTimeout(() => {
    this.map.invalidateSize();
  }, 300);
}



}
