import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendaftaranOnlineComponent } from './pendaftaran-online.component';

describe('PendaftaranOnlineComponent', () => {
  let component: PendaftaranOnlineComponent;
  let fixture: ComponentFixture<PendaftaranOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendaftaranOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendaftaranOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
