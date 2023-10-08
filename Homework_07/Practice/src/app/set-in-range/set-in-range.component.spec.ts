import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetInRangeComponent } from './set-in-range.component';

describe('SetInRangeComponent', () => {
  let component: SetInRangeComponent;
  let fixture: ComponentFixture<SetInRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetInRangeComponent]
    });
    fixture = TestBed.createComponent(SetInRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
