import { Injectable } from '@angular/core';
import { ExpenseInput } from './expense-input';
import { Observable, tap, catchError, throwError, of } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {   

  selectionOptionUrl: string = '/api/expensecalculator/v1/getExpenseRecordSelectOptions';
  expenseFormSubmitUrl: string = '/api/expensecalculator/v1/saveExpenseRecords?dateOfExpense='; // dateOfExpense to be included

  constructor(private http: HttpClient) { }

  postExpenseInputForm(expenseFormData: ExpenseInput[], dateOfExpense: string): Observable<any> {
    return this.http.post(this.expenseFormSubmitUrl + dateOfExpense, expenseFormData);
    // return of( expenseFormData); // fake. We're just returning back the receive data for test
  }

  getExpenseRecordSelectOptions(): Observable<any> {
      // return of(['None','EMI','Groceries','Veggies and Fruits','Home Maintenance','Utility Bills','Shopping','Fuel','Vehicle Maintenance','Savings','Personal','Medical','Miscellaneous']);
      return this.http.get(this.selectionOptionUrl); // To do
  }
  
}
