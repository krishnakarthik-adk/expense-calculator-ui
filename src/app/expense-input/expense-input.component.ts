import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ExpenseInput } from './expense-input';
import { ExpenseService } from './expense-service.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'ec-expense-input',
  templateUrl: './expense-input.component.html',
  styleUrls: ['./expense-input.component.css'],
})
export class ExpenseInputComponent implements OnInit {
  pageTitle: string = 'Expense Input';

  expenseInput: ExpenseInput = {
    item: '',
    amount: '',
    expenseCategory: 'None',
    notes: ''
  };

  dateOfExpense: string = '';

  expenseDate: string = '';

  dynamicExpenseArray: ExpenseInput[] = [];

  constructor(private expenseService: ExpenseService) { } // Dependency Injection

  addRow(): void {
    this.dynamicExpenseArray.push({
      item: '',
      amount: '',
      expenseCategory: 'None',
      notes: ''
    });
  }

  deleteRow(index: number) {
    this.dynamicExpenseArray.splice(index);
  }

  ngOnInit(): void {
    this.dynamicExpenseArray.push(this.expenseInput);
  }

  onSubmit(form: NgForm) {
    console.log(form.valid);
    // Format the date to successfully parse at the backend. The date format is standardized as MM/dd/yyyy throughout.
    this.expenseDate = formatDate(this.dateOfExpense, 'MM/dd/yyyy', 'en-US');    
    this.expenseService.postExpenseInputForm(this.dynamicExpenseArray, this.expenseDate).subscribe(
      {
        next: expenseRecord => {
          console.log('success: ' + expenseRecord);          
        },
        error: err => console.log('error: ' + err)
      }
    );
  }

}
