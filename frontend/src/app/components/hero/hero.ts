import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class HeroComponent implements AfterViewInit {

  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.heroVideo?.nativeElement;

    if (video) {
      video.muted = true;   // obligatorio para autoplay
      video.volume = 0;     // refuerzo de silencio
      video.loop = true;    // bucle infinito

      // Intento de reproducción
      video.play().catch(err => {
        console.warn('⚠️ No se pudo reproducir el video automáticamente:', err);
      });
    }
  }
}
