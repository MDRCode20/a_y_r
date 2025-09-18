import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workshops',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './workshops.html',
  styleUrls: ['./workshops.css'] 
})
export class WorkshopsComponent {
    @ViewChild('carousel') carousel!: ElementRef;
 talleres = [
  {
    titulo: 'Oratoria',
    descripcion: 'Aprende a hablar en público con seguridad y claridad.',
    imagen: 'https://www.axiomafv.com/wp-content/uploads/2021/03/convencer-a-un-cliente-para-que-compre.jpg',
  },
  {
    titulo: 'Autoestima',
    descripcion: 'Fortalece tu confianza personal y desarrolla tu liderazgo.',
    imagen: 'https://i0.wp.com/blog.axontraining.com/wp-content/uploads/2022/12/Convencer-Axon-Training.jpg?fit=1440%2C945&ssl=1',
  },
  {
    titulo: 'Dinámicas Grupales',
    descripcion: 'Recreación y actividades para crecer en comunidad.',
    imagen: 'https://fortia.com.mx/wp-content/uploads/2025/02/dinamicas-grupales.webp',
  },
  {
    titulo: 'Liderazgo',
    descripcion: 'Desarrolla habilidades para guiar equipos y motivar personas.',
    imagen: 'https://03bebbcc20.clvaw-cdnwnd.com/9466812edd26ac40d3bd6b5009a23659/200001011-5c5655c568/oratoria%20y%20liderazgo.jpeg?ph=03bebbcc20',
  },
  {
    titulo: 'Debate',
    descripcion: 'Aprende a argumentar con lógica, respeto y persuasión.',
    imagen: 'https://comunicaciones.congreso.gob.pe/wpuploads/2023/08/whatsapp-image-2023-08-25-at-12-05-39.jpeg',
  },
  {
    titulo: 'Comunicación Asertiva',
    descripcion: 'Mejora tu forma de expresarte sin agresividad ni pasividad.',
    imagen: 'https://eepsicologia.com/wp-content/uploads/que-es-la-comunicacion-asertiva.jpg',
  },
  {
    titulo: 'Creatividad e Innovación',
    descripcion: 'Potencia tu pensamiento creativo para resolver problemas de manera original.',
    imagen: 'https://lh3.googleusercontent.com/proxy/WKYJIsjB8d1nY31pdozZ5VmxG9TiSMqZA2RngQ3x0nyEcyTLeqXd02Hmc4qpnpPJvHNaHsoTmtTirQk1yFEOVk7H_X-4BR_OxaQhTVXBrQEAE-5qskMAX2U',
  },
  {
    titulo: 'Manejo del Estrés',
    descripcion: 'Descubre técnicas prácticas para controlar la ansiedad y mantener la calma.',
    imagen: 'https://itcformacionyconsultoria.com/wp-content/uploads/2024/05/manejo-del-estres.webp',
  }
];

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

}
