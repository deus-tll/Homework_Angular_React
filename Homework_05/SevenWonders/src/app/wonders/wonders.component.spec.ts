import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WondersComponent } from './wonders.component';

describe('WondersComponent', () => {
  let component: WondersComponent;
  let fixture: ComponentFixture<WondersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WondersComponent]
    });
    fixture = TestBed.createComponent(WondersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
