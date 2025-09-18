import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css']
})
export class CarouselComponent {
  images: string[] = [
    'assets/img/img1.jpg',
    'assets/img/img2.jpg',
    'assets/img/img3.jpg'
  ];

  currentIndex = 0;
  animating = false;
  direction: 'next' | 'prev' | null = null;

  next() {
    if (this.animating) return;
    this.animating = true;
    this.direction = 'next';

    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.animating = false;
    }, 500); // duración de la transición
  }

  prev() {
    if (this.animating) return;
    this.animating = true;
    this.direction = 'prev';

    setTimeout(() => {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.animating = false;
    }, 500);
  }
}
