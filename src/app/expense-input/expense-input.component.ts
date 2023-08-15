import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { ExpenseInput } from './expense-input';

@Component({
  selector: 'ec-expense-input',
  templateUrl: './expense-input.component.html',
  styleUrls: ['./expense-input.component.css'],  
})
export class ExpenseInputComponent implements OnInit{
  pageTitle: string = 'Expense Input';

  expenseInput: ExpenseInput  =  {
    item: '',
    amount: '',
    expenseCategory: 'None',
    notes: ''
  }; 

  dynamicExpenseArray: ExpenseInput [] = [];  

  addRow(): void {
    this.dynamicExpenseArray.push({
      item: '',
      amount: '',
      expenseCategory: 'None',
      notes: ''});           
  }

  deleteRow(index:number) {
    this.dynamicExpenseArray.splice(index);
  }

  ngOnInit(): void {
    this.dynamicExpenseArray.push(this.expenseInput);
  }

  onSubmit(form: NgForm){
    console.log(form.valid);
  }
  
}
