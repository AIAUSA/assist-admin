import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdayDetailsComponent } from './userday-details.component';

describe('UserdayDetailsComponent', () => {
  let component: UserdayDetailsComponent;
  let fixture: ComponentFixture<UserdayDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdayDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
