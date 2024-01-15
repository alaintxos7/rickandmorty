import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personajes } from '../models/personaje';



@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
baseUrl:string = 'https://rickandmortyapi.com/api/';
constructor(private http:HttpClient) { }

getPersonajes() :Observable<Personajes>{
return this.http.get<Personajes>(this.baseUrl+'/character');

}

}
