import { TestBed } from '@angular/core/testing';

import { ServicioEncuestaService } from './servicio-encuesta.service';

describe('ServicioEncuestaService', () => {
  let service: ServicioEncuestaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEncuestaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
