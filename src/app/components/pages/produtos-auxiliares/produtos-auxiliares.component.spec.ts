import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosAuxiliaresComponent } from './produtos-auxiliares.component';

describe('ProdutosAuxiliaresComponent', () => {
  let component: ProdutosAuxiliaresComponent;
  let fixture: ComponentFixture<ProdutosAuxiliaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosAuxiliaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosAuxiliaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
