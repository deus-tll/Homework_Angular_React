import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyInfoComponent } from './hobby-info.component';

describe('HobbyInfoComponent', () => {
  let component: HobbyInfoComponent;
  let fixture: ComponentFixture<HobbyInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HobbyInfoComponent]
    });
    fixture = TestBed.createComponent(HobbyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
