import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoPeliculaPageRoutingModule } from './info-pelicula-routing.module';

import { InfoPeliculaPage } from './info-pelicula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoPeliculaPageRoutingModule
  ],
  declarations: [InfoPeliculaPage]
})
export class InfoPeliculaPageModule {}
