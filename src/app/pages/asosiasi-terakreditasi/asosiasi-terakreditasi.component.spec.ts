import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsosiasiTerakreditasiComponent } from './asosiasi-terakreditasi.component';

describe('AsosiasiTerakreditasiComponent', () => {
  let component: AsosiasiTerakreditasiComponent;
  let fixture: ComponentFixture<AsosiasiTerakreditasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsosiasiTerakreditasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsosiasiTerakreditasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
