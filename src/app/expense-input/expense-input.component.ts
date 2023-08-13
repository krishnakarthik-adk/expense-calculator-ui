import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ec-expense-input',
  templateUrl: './expense-input.component.html',
  styleUrls: ['./expense-input.component.css']
})
export class ExpenseInputComponent {
  pageTitle: string = 'Expense Input';

  item: string = '';
  amount: string = '';
  expenseCategory:string = 'None';
  comments: string = '';

}
