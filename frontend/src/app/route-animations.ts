import { trigger, transition, style, animate, query, group } from '@angular/animations';

export const routeAnimations =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Posiciona los elementos en el mismo espacio
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        })
      ], { optional: true }),

      // Estado inicial de la nueva vista
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' })
      ], { optional: true }),

      group([
        // Animación de la vista que sale
        query(':leave', [
          animate('300ms ease', style({ opacity: 0, transform: 'translateY(-20px)' }))
        ], { optional: true }),

        // Animación de la vista que entra
        query(':enter', [
          animate('300ms ease', style({ opacity: 1, transform: 'translateY(0)' }))
        ], { optional: true }),
      ])
    ])
  ]);
