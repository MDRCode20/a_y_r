import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
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
  navItems = [
    { name: 'Inicio', fragment: 'inicio' },
    { name: 'Nosotros', fragment: 'nosotros' },
    { name: 'Talleres', fragment: 'trabajos' },
    { name: 'Testimonios', fragment: 'testimonios' },
    { name: 'Inscripción', fragment: 'hero' },
    
    
  ];
}
