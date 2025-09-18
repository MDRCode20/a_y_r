import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  animations: [
    trigger('fadeInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-40px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
      ]),
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('500ms ease-out'),
      ]),
    ]),
  ],
})
export class HeaderComponent {
  menuOpen = false;
  isDarkSection = false; // 🔑 controla el color dinámico

  navItems = [
    { name: 'Inicio', fragment: 'inicio' },
    { name: 'Nosotros', fragment: 'nosotros' },
    { name: 'Talleres', fragment: 'trabajos' },
    { name: 'Testimonios', fragment: 'testimonios' },
    { name: 'Inscripción', fragment: 'hero' },
    { name: 'Galeria', fragment: 'galeria' },
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // 🔑 Detecta el scroll y cambia color en secciones oscuras
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const darkSections = ['nosotros', 'galeria']; // 👈 secciones que quieres oscuras
    let inDark = false;

    for (const section of darkSections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          inDark = true;
          break;
        }
      }
    }

    this.isDarkSection = inDark;
  }
}
