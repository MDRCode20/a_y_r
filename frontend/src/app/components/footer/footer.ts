import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule], // 👈 Importar módulo
  templateUrl: './footer.html',
  styleUrls: ['./footer.css']
})
export class FooterComponent {
  faFacebook = faFacebookF;
  faInstagram = faInstagram;
  faWhatsapp = faWhatsapp;

  modalActivo: 'politica' | 'reclamo' | null = null;

  abrirModal(tipo: 'politica' | 'reclamo') {
    this.modalActivo = tipo;
    document.body.style.overflow = 'hidden';
  }

  cerrarModal() {
    this.modalActivo = null;
    document.body.style.overflow = 'auto';
  }

  get anioActual() {
    return new Date().getFullYear();
  }
}
