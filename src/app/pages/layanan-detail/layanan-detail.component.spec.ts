import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayananDetailComponent } from './layanan-detail.component';

describe('LayananDetailComponent', () => {
  let component: LayananDetailComponent;
  let fixture: ComponentFixture<LayananDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayananDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayananDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
