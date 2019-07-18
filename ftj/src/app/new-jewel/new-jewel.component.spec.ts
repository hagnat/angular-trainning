import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewJewelComponent } from './new-jewel.component';

describe('NewJewelComponent', () => {
  let component: NewJewelComponent;
  let fixture: ComponentFixture<NewJewelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewJewelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewJewelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
