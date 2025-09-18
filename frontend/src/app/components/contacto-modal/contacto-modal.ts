import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contacto-modal',
  templateUrl: './contacto-modal.html',
  styleUrls: ['./contacto-modal.css']
})
export class ContactoModalComponent {
  @Input() contacto: any; // recibirá los datos del contacto
  @Output() cerrar = new EventEmitter<void>();

  cerrarModal() {
    this.cerrar.emit();
  }
}
