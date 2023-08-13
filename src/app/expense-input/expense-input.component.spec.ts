import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseInputComponent } from './expense-input.component';

describe('ExpenseInputComponent', () => {
  let component: ExpenseInputComponent;
  let fixture: ComponentFixture<ExpenseInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseInputComponent]
    });
    fixture = TestBed.createComponent(ExpenseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
