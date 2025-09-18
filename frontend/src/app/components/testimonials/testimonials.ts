import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.css']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  testimonios = [
    { texto: 'Gracias al taller perdí el miedo a hablar en público y ahora disfruto expresarme.', autor: '— Laura G.', foto: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { texto: 'Un espacio lleno de energía positiva que me ayudó a crecer como persona.', autor: '— Carlos M.', foto: 'https://randomuser.me/api/portraits/men/46.jpg' },
    { texto: 'Aprendí técnicas para comunicarme mejor y sentirme más seguro.', autor: '— Diego R.', foto: 'https://randomuser.me/api/portraits/men/47.jpg' },
    { texto: 'Excelente experiencia, lo recomiendo a todos.', autor: '— Mariana P.', foto: 'https://randomuser.me/api/portraits/women/45.jpg' }
  ];

  currentIndex = 0;
  intervalId: any;
  isAnimating = false;

  ngOnInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startCarousel() {
    this.intervalId = setInterval(() => {
      this.isAnimating = true; // activa animación
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 2) % this.testimonios.length;
        this.isAnimating = false;
      }, 500); // ⏱ duración animación
    }, 4000); // cambia cada 4s
  }

  get visibleTestimonials() {
    return [
      this.testimonios[this.currentIndex],
      this.testimonios[(this.currentIndex + 1) % this.testimonios.length]
    ];
  }
}
