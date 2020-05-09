import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlightComponent } from './search-flight.component';

describe('SearchFlightComponent', () => {
  let component: SearchFlightComponent;
  let fixture: ComponentFixture<SearchFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
