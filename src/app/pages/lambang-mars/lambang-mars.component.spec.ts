import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LambangMarsComponent } from './lambang-mars.component';

describe('LambangMarsComponent', () => {
  let component: LambangMarsComponent;
  let fixture: ComponentFixture<LambangMarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LambangMarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LambangMarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
