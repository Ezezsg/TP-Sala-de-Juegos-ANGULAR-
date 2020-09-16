import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerpienteComponent } from './serpiente.component';

describe('SerpienteComponent', () => {
  let component: SerpienteComponent;
  let fixture: ComponentFixture<SerpienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerpienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerpienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
