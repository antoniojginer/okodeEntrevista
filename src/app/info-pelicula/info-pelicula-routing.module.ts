import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPeliculaPage } from './info-pelicula.page';

const routes: Routes = [
  {
    path: '',
    component: InfoPeliculaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPeliculaPageRoutingModule {}
