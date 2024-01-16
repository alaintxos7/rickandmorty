import { Component, OnInit } from '@angular/core';
import { FiltroComponent } from '../filtro/filtro.component';
import { PersonajesService } from '../services/personajes.service';
import { Gender, Personaje, Personajes } from '../models/personaje';
import { CommonModule } from '@angular/common';
import { TarjetapersonajeComponent } from '../tarjetapersonaje/tarjetapersonaje.component';
import { TabsComponent } from '../tabs/tabs.component';
import { BuscarpersonajePipe } from '../pipe/buscarpersonaje.pipe';
import { ButtonModule } from 'primeng/button';
import { DetalleComponent } from '../detalle/detalle.component';
@Component({
  selector: 'app-listadopersonajes',
  standalone: true,
  imports: [FiltroComponent, TarjetapersonajeComponent,CommonModule,TabsComponent, BuscarpersonajePipe, ButtonModule, DetalleComponent],
  templateUrl: './listadopersonajes.component.html',
  styleUrl: './listadopersonajes.component.css'
})
export class ListadopersonajesComponent implements OnInit {
listadoPersonajes:Personajes;
listadoPersonajesAux:Personaje[] = [];
personajeDetalle:Personaje;
tiposGeneros:string[]= []
favoritos: any[] = [];
nombrePersonaje:string=""
generoSeleccionado:string = "ALL";
mostrarFavoritos:boolean = false;
  constructor(private personajeService:PersonajesService){

  }
  ngOnInit() {
    this.favoritos = JSON.parse(localStorage.getItem('favoritosRickandMorty')!) || [];
    this.personajeService.getPersonajes().subscribe(data => {
      this.listadoPersonajes = data;
      this.listadoPersonajes.results.map(personaje=>{
          if(!this.tiposGeneros.includes(personaje.gender)){
            this.tiposGeneros.push(personaje.gender);
            }
        } )
        this.listadoPersonajes.results.map(personaje=>{
          if(this.favoritos.includes( personaje.id)){
            personaje.isFav = true;
          }else{
            personaje.isFav = false;
          }
          this.listadoPersonajesAux.push(personaje);

        });

    });
  }


  filtrarGenero(genero:any){
    this.listadoPersonajesAux=[]
    this.generoSeleccionado=genero;
    if(genero == 'ALL'){
       this.listadoPersonajes.results.map(personaje=>{
        if (this.mostrarFavoritos) {
            if(this.favoritos.includes(personaje.id)){
              this.listadoPersonajesAux.push(personaje);
            }
        }else{
          this.listadoPersonajesAux.push(personaje)
        }
      });
    }else{
      this.listadoPersonajes.results.map(personaje=>{
        if (this.mostrarFavoritos) {
            if(this.favoritos.includes(personaje.id)){
              if(personaje.gender == genero){
                this.listadoPersonajesAux.push(personaje);
              }
            }
          } else{
            if(personaje.gender == genero){
              this.listadoPersonajesAux.push(personaje);
            }
           }

       });
    }
  }

  filtrarNombre(nombre:any){
    this.nombrePersonaje= nombre;
  }

  mostrarFav(event:any, refresh=false){
    if(!refresh){this.mostrarFavoritos= !this.mostrarFavoritos}
    this.favoritos = JSON.parse(localStorage.getItem('favoritosRickandMorty')!) || [];
    this.listadoPersonajesAux = [];

    if (this.mostrarFavoritos) {
      this.listadoPersonajes.results.map(personaje=>{
        if(this.favoritos.includes(personaje.id)){
          if(personaje.gender == this.generoSeleccionado || this.generoSeleccionado == 'ALL'){
          this.listadoPersonajesAux.push(personaje);
          }
        }
       });


      }else{
        this.listadoPersonajes.results.map(personaje=>{
          if(personaje.gender == this.generoSeleccionado || this.generoSeleccionado == 'ALL'){
            this.listadoPersonajesAux.push(personaje);
            }});

      }
    }


    eliminarFiltro(){
      this.mostrarFavoritos = false;
      this.generoSeleccionado='ALL';
      this.filtrarGenero('ALL');
    }

  mostraDetalle(personaje: any) {
      console.log(personaje);

      this.personajeDetalle=personaje;
    }
}
