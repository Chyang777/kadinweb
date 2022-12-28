import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SekretariatComponent } from './sekretariat.component';

describe('SekretariatComponent', () => {
  let component: SekretariatComponent;
  let fixture: ComponentFixture<SekretariatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SekretariatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SekretariatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
