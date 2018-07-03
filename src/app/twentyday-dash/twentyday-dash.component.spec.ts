import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwentydayDashComponent } from './twentyday-dash.component';

describe('TwentydayDashComponent', () => {
  let component: TwentydayDashComponent;
  let fixture: ComponentFixture<TwentydayDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwentydayDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwentydayDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
