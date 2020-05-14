import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnSearchComponent } from './an-search.component';

describe('AnSearchComponent', () => {
  let component: AnSearchComponent;
  let fixture: ComponentFixture<AnSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
