import { Component, Input, OnInit } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { Personaje } from '../models/personaje';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { EpisodiosService } from '../services/episodios.service';
import { Episodio } from '../models/episodio';
@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [ImageModule, CardModule, DividerModule ],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.css'
})
export class DetalleComponent implements OnInit{
  episodios: Episodio[]=[];
  constructor(private episodeService:EpisodiosService){

   }
ngOnInit() {
  console.log(this.personaje.episode);

 this.personaje.episode.forEach(element => {

this.episodeService.getEpisodio(element).subscribe((data:any) => {
this.episodios.push(data)
})
console.log('====================================');
console.log(this.episodios);
console.log('====================================');
 })
}
@Input() personaje: Personaje;
}
