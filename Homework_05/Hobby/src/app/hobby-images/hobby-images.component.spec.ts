import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyImagesComponent } from './hobby-images.component';

describe('HobbyImagesComponent', () => {
  let component: HobbyImagesComponent;
  let fixture: ComponentFixture<HobbyImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HobbyImagesComponent]
    });
    fixture = TestBed.createComponent(HobbyImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
