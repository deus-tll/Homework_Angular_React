import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollTheDiceComponent } from './roll-the-dice.component';

describe('RollTheDiceComponent', () => {
  let component: RollTheDiceComponent;
  let fixture: ComponentFixture<RollTheDiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RollTheDiceComponent]
    });
    fixture = TestBed.createComponent(RollTheDiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
