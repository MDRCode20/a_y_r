import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './galeria.html',
  styleUrls: ['./galeria.css']
})
export class GaleriaComponent {
imagenesAdolescentes = [
  { url: '/assets/img/hero.jpg', titulo: 'Actividad 1' },
  { url: '/assets/img/reunion.jpg', titulo: 'Debate en clase' },
  { url: '/assets/img/juego.png', titulo: 'Presentación grupal' },
];

imagenesNinos = [
  { url: '/assets/img/niños1.png', titulo: 'Dinámica en clase' },
  { url: '/assets/img/niños2.png', titulo: 'Juego de oratoria' },
  { url: '/assets/img/niños3.png', titulo: 'Exposición creativa' },
];

}
