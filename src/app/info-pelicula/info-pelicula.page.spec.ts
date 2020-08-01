import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoPeliculaPage } from './info-pelicula.page';

describe('InfoPeliculaPage', () => {
  let component: InfoPeliculaPage;
  let fixture: ComponentFixture<InfoPeliculaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPeliculaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoPeliculaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
