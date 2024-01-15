import { Component, OnInit } from '@angular/core';
import { FiltroComponent } from '../filtro/filtro.component';
import { PersonajesService } from '../services/personajes.service';
import { Personajes } from '../models/personaje';
import { CommonModule } from '@angular/common';
import { TarjetapersonajeComponent } from '../tarjetapersonaje/tarjetapersonaje.component';

@Component({
  selector: 'app-listadopersonajes',
  standalone: true,
  imports: [FiltroComponent, TarjetapersonajeComponent,CommonModule],
  templateUrl: './listadopersonajes.component.html',
  styleUrl: './listadopersonajes.component.css'
})
export class ListadopersonajesComponent implements OnInit {
listadoPersonajes:Personajes;
mensaje:string = "Listado de personajes";
  constructor(private personajeService:PersonajesService){}
  ngOnInit() {
    this.personajeService.getPersonajes().subscribe(data => {
      this.listadoPersonajes = data;
    });
  }
}
