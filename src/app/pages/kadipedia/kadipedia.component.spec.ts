import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KadipediaComponent } from './kadipedia.component';

describe('KadipediaComponent', () => {
  let component: KadipediaComponent;
  let fixture: ComponentFixture<KadipediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KadipediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KadipediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
