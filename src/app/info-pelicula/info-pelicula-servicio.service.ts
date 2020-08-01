import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPeliculaServicioService {

  constructor(private http: HttpClient) { }

  getPelicula(peliculaId: string){
    return this.http.get<any>('https://api.themoviedb.org/3/movie/'+peliculaId+'?api_key=0c87e831560fb99c702ac43fe1f7c8bf&language=en-US');
  }
}
