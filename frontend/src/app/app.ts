import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { trigger, transition, style, animate, query, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        // Ocultar la página actual
        query(':leave', [
          style({ opacity: 1, transform: 'translateX(0)' }),
          animate('400ms ease-out', style({ opacity: 0, transform: 'translateX(-30px)' }))
        ], { optional: true }),

        // Mostrar la nueva página
        query(':enter', [
          style({ opacity: 0, transform: 'translateX(30px)' }),
          animate('400ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
        ], { optional: true }),
      ])
    ])
  ]
})
export class AppComponent {
  // 👇 función que Angular usa para decidir la animación de rutas
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
