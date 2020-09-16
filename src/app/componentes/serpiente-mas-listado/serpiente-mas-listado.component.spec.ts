import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerpienteMasListadoComponent } from './serpiente-mas-listado.component';

describe('SerpienteMasListadoComponent', () => {
  let component: SerpienteMasListadoComponent;
  let fixture: ComponentFixture<SerpienteMasListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerpienteMasListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerpienteMasListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
