import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getPopular() {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/popular?api_key=0c87e831560fb99c702ac43fe1f7c8bf&language=en-US&page=1');
  }

  public getTopRated() {
    return this.http.get<any>('https://api.themoviedb.org/3/movie/top_rated?api_key=0c87e831560fb99c702ac43fe1f7c8bf&language=en-US&page=1');
  }

  public search(x){
    var aux = encodeURI(x);
    console.log(aux);
    return this.http.get<any>('https://api.themoviedb.org/3/search/movie?api_key=0c87e831560fb99c702ac43fe1f7c8bf&language=en-US&query='+aux+'&page=1&include_adult=false')
  }
}
