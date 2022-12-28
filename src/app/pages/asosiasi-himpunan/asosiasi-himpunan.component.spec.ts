import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsosiasiHimpunanComponent } from './asosiasi-himpunan.component';

describe('AsosiasiHimpunanComponent', () => {
  let component: AsosiasiHimpunanComponent;
  let fixture: ComponentFixture<AsosiasiHimpunanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsosiasiHimpunanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsosiasiHimpunanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
