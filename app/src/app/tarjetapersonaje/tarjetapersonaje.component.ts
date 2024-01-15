import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Personaje } from '../models/personaje';
import { ImageModule } from 'primeng/image';
@Component({
  selector: 'app-tarjetapersonaje',
  standalone: true,
  imports: [CardModule,ImageModule],
  templateUrl: './tarjetapersonaje.component.html',
  styleUrl: './tarjetapersonaje.component.css'
})
export class TarjetapersonajeComponent implements OnInit {
@Input() personaje: Personaje;
constructor(){
  console.log(this.personaje);

}
  ngOnInit(): void {
    console.log(this.personaje);
  }
}
