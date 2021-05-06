import { TestBed } from '@angular/core/testing';

import { ServicoJuegosService } from './servico-juegos.service';

describe('ServicoJuegosService', () => {
  let service: ServicoJuegosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoJuegosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
