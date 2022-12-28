import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersyaratanProsedurComponent } from './persyaratan-prosedur.component';

describe('PersyaratanProsedurComponent', () => {
  let component: PersyaratanProsedurComponent;
  let fixture: ComponentFixture<PersyaratanProsedurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersyaratanProsedurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersyaratanProsedurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
