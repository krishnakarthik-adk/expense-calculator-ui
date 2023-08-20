import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterDairyComponent } from './water-dairy.component';

describe('WaterDairyComponent', () => {
  let component: WaterDairyComponent;
  let fixture: ComponentFixture<WaterDairyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterDairyComponent]
    });
    fixture = TestBed.createComponent(WaterDairyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
