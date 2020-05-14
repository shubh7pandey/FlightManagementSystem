import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonhomeComponent } from './commonhome.component';

describe('CommonhomeComponent', () => {
  let component: CommonhomeComponent;
  let fixture: ComponentFixture<CommonhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
