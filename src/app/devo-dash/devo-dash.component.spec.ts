import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevoDashComponent } from './devo-dash.component';

describe('DevoDashComponent', () => {
  let component: DevoDashComponent;
  let fixture: ComponentFixture<DevoDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevoDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevoDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
