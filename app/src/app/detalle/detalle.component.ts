import { Component, Input } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { Personaje } from '../models/personaje';
@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [ImageModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent {
@Input() personaje: Personaje;
}
