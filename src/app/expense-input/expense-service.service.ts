import { Injectable } from '@angular/core';
import { ExpenseInput } from './expense-input';
import { Observable, tap, catchError, throwError, of } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  
  hostUrl: string = 'http://ec2-35-180-66-174.eu-west-3.compute.amazonaws.com:8080';

  // selectionOptionUrl: string = '/api/expensecalculator/v1/getExpenseRecordSelectOptions'; // For local dev
  selectionOptionUrl: string = this.hostUrl + '/api/expensecalculator/v1/getExpenseRecordSelectOptions'; // For AWS

  expenseFormSubmitUrl: string = this.hostUrl + '/api/expensecalculator/v1/saveExpenseRecords' + '?dateOfExpense=';

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
