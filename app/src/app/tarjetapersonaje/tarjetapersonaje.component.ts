import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Personaje, Status } from '../models/personaje';
import { ImageModule } from 'primeng/image';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-tarjetapersonaje',
  standalone: true,
  imports: [CardModule,ImageModule,NgStyle],
  templateUrl: './tarjetapersonaje.component.html',
  styleUrl: './tarjetapersonaje.component.css'
})
export class TarjetapersonajeComponent implements OnInit {
  favoritos: any[] = [];
@Input() personaje: Personaje;
@Output() eliminadoDefavoritos = new EventEmitter<Personaje>();



constructor(){
  this.favoritos = JSON.parse(localStorage.getItem('favoritosRickandMorty')!) || [];
}
  ngOnInit(): void {

  }

  isAlive(status: Status): string {
    return status === Status.Alive ? 'green' : 'red';
    }


  anadirFav(personaje: Personaje) {
    this.favoritos = JSON.parse(localStorage.getItem('favoritosRickandMorty')!)
    personaje.isFav=true;
    this.favoritos.push(personaje.id );
    localStorage.setItem('favoritosRickandMorty', JSON.stringify(this.favoritos));

  }


  eliminarFav(personaje:Personaje){
    this.favoritos = JSON.parse(localStorage.getItem('favoritosRickandMorty')!)
    const indice = this.favoritos.findIndex(item => item === personaje.id);
    console.log(indice);

    if (indice !== -1) {
      personaje.isFav=false;
      this.favoritos.splice(indice, 1);
      localStorage.setItem('favoritosRickandMorty', JSON.stringify(this.favoritos));
      this.eliminadoDefavoritos.emit(personaje);
    }
  }



}
