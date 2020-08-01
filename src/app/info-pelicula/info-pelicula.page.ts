import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { InfoPeliculaServicioService } from './info-pelicula-servicio.service';

@Component({
  selector: 'app-info-pelicula',
  templateUrl: './info-pelicula.page.html',
  styleUrls: ['./info-pelicula.page.scss'],
})
export class InfoPeliculaPage implements OnInit {

  constructor(private route:ActivatedRoute, private infoPeliculaServicio: InfoPeliculaServicioService) { }

  pelicula = [];
  generos = [];
  adultos = 'No';
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.infoPeliculaServicio.getPelicula(paramMap.get('peliculaId')).subscribe(data => {
        this.pelicula = data;
        this.generos = data.genres;
        if(data.adult){
          this.adultos = 'Sí';
        }
      });
    });
  }

}
