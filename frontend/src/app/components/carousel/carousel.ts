import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  animateChild,
  group
} from '@angular/animations';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('* => *', [
        // Estado inicial de la nueva imagen
        query(':enter', [
          style({ opacity: 0, transform: 'translateX(100%)' })
        ], { optional: true }),

        // Estado final de la imagen que se va
        query(':leave', [
          style({ opacity: 1, transform: 'translateX(0)' }),
          animate('600ms ease', style({ opacity: 0, transform: 'translateX(-100%)' }))
        ], { optional: true }),

        // Animación de entrada de la nueva imagen
        query(':enter', [
          animate('600ms ease', style({ opacity: 1, transform: 'translateX(0)' }))
        ], { optional: true }),
      ])
    ])
  ]
})
export class CarouselComponent {
  images = [
    'assets/img1.jpg',
    'assets/img2.jpg',
    'assets/img3.jpg'
  ];

  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
