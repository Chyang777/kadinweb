import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdRtComponent } from './ad-rt.component';

describe('AdRtComponent', () => {
  let component: AdRtComponent;
  let fixture: ComponentFixture<AdRtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdRtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdRtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
