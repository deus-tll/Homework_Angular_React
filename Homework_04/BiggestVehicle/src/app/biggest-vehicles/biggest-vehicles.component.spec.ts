import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiggestVehiclesComponent } from './biggest-vehicles.component';

describe('BiggestVehiclesComponent', () => {
  let component: BiggestVehiclesComponent;
  let fixture: ComponentFixture<BiggestVehiclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiggestVehiclesComponent]
    });
    fixture = TestBed.createComponent(BiggestVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
