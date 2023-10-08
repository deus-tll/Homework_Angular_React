import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsOrTailsComponent } from './heads-or-tails.component';

describe('HeadsOrTailsComponent', () => {
  let component: HeadsOrTailsComponent;
  let fixture: ComponentFixture<HeadsOrTailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadsOrTailsComponent]
    });
    fixture = TestBed.createComponent(HeadsOrTailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
