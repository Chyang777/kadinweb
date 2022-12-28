import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KebijakanPemerintahComponent } from './kebijakan-pemerintah.component';

describe('KebijakanPemerintahComponent', () => {
  let component: KebijakanPemerintahComponent;
  let fixture: ComponentFixture<KebijakanPemerintahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KebijakanPemerintahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KebijakanPemerintahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
