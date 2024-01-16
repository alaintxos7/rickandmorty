import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarpersonaje',
  standalone: true
})
export class BuscarpersonajePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if(arg === '' ) return value
    let resultadoPersonajes= []
    for(const personaje of value){
      if(personaje.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultadoPersonajes.push(personaje)
      }
    }
    return resultadoPersonajes;
  }

}
