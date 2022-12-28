import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeraturanPedomanComponent } from './peraturan-pedoman.component';

describe('PeraturanPedomanComponent', () => {
  let component: PeraturanPedomanComponent;
  let fixture: ComponentFixture<PeraturanPedomanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeraturanPedomanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeraturanPedomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
