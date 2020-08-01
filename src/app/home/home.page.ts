import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private apiService: ApiService) {}

  peliculas = [];

  ngOnInit() {
      this.topRatedView();
  }

  topRatedView() {
    this.apiService.getTopRated().subscribe(data => {
      this.peliculas = data.results;
      var x;
      this.peliculas.forEach(element => {
        x = element.poster_path;
        if(x != null){
          element.poster_path = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'+x;
        }        
      });
    })
  }

  onInput(event){
    this.apiService.search(event.target.value.toLowerCase()).subscribe(data => {
      this.peliculas = data.results;
      var x;
      this.peliculas.forEach(element => {
        x = element.poster_path;
        if(x != null){
          element.poster_path = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'+x;
        }  
      });
    })
  }

  recargar(event){
    this.topRatedView();
  }
}
