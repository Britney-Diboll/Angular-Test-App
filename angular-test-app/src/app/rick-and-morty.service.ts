import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(
    private http: HttpClient
  ) { }

    getRickAndMorty() {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }
}
