import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowJewelComponent } from './show-jewel.component';

describe('ShowJewelComponent', () => {
  let component: ShowJewelComponent;
  let fixture: ComponentFixture<ShowJewelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowJewelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowJewelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
