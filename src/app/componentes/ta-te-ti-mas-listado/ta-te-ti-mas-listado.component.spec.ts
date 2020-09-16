import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaTeTiMasListadoComponent } from './ta-te-ti-mas-listado.component';

describe('TaTeTiMasListadoComponent', () => {
  let component: TaTeTiMasListadoComponent;
  let fixture: ComponentFixture<TaTeTiMasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaTeTiMasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaTeTiMasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
