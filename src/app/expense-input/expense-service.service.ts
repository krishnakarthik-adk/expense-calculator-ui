import { Injectable } from '@angular/core';
import { ExpenseInput } from './expense-input';
import { Observable, tap, catchError, throwError, of } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) { }

  expenseFormSubmitUrl: string = '/api/expensecalculator/v1/saveExpenseRecords?dateOfExpense='; // dateOfExpense to be included

  postExpenseInputForm(expenseFormData: ExpenseInput[], dateOfExpense: string): Observable<any> {
    return this.http.post(this.expenseFormSubmitUrl + dateOfExpense, expenseFormData);
    // return of( expenseFormData); // fake. We're just returning back the receive data for test
  }
}
