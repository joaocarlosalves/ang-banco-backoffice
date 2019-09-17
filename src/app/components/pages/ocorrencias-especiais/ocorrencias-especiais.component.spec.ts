import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcorrenciasEspeciaisComponent } from './ocorrencias-especiais.component';

describe('OcorrenciasEspeciaisComponent', () => {
  let component: OcorrenciasEspeciaisComponent;
  let fixture: ComponentFixture<OcorrenciasEspeciaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcorrenciasEspeciaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcorrenciasEspeciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
