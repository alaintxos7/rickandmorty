import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { Personaje } from '../models/personaje';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { EpisodiosService } from '../services/episodios.service';
import { Episodio } from '../models/episodio';
import { CommonModule, NgStyle } from '@angular/common';
@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [ImageModule, CardModule, DividerModule, NgStyle, CommonModule ],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit{
  @Input() personaje: Personaje;
  episodios: Episodio[]=[];
mostrarDetalle:boolean = true;
@Output() cerrar = new EventEmitter<boolean>();

  constructor(private episodeService:EpisodiosService){

   }
ngOnInit() {

 this.personaje.episode.forEach(element => {

this.episodeService.getEpisodio(element).subscribe((data:any) => {
this.episodios.push(data)
})

 })
}
cerrarDetalle(value: boolean) {
  this.cerrar.emit(value);
}

}
