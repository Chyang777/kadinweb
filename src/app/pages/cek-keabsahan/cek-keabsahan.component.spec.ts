import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CekKeabsahanComponent } from './cek-keabsahan.component';

describe('CekKeabsahanComponent', () => {
  let component: CekKeabsahanComponent;
  let fixture: ComponentFixture<CekKeabsahanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CekKeabsahanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CekKeabsahanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
