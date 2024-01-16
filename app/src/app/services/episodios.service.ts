import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episodio } from '../models/episodio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  baseUrl:string = 'https://rickandmortyapi.com/api/';
  constructor(private http:HttpClient) { }

  getEpisodio(url:string) :Observable<Episodio>{
  return this.http.get<Episodio>(url);

  }

}
