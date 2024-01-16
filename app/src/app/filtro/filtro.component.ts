import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { Personaje } from '../models/personaje';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
@Component({
  selector: 'app-filtro',
  standalone: true,
  imports: [ImageModule, AutoCompleteModule, CommonModule, FormsModule],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.css'
})
export class FiltroComponent {
  @Input() personajes: Personaje[]=[] ;
personajesFiltrados:Personaje[]=[];
nombrePersonaje:string="";
@Output() nombreSeleccionado = new EventEmitter<string>();


cambioNombre(event:any) {

  this.nombreSeleccionado.emit(this.nombrePersonaje);
}
}
