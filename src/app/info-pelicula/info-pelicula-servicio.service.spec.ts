import { TestBed } from '@angular/core/testing';

import { InfoPeliculaServicioService } from './info-pelicula-servicio.service';

describe('InfoPeliculaServicioService', () => {
  let service: InfoPeliculaServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoPeliculaServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
