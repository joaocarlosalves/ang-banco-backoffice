import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarCanalComponent } from './adicionar-canal.component';

describe('AdicionarCanalComponent', () => {
  let component: AdicionarCanalComponent;
  let fixture: ComponentFixture<AdicionarCanalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarCanalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarCanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
