import { Component } from '@angular/core';
import { ExpenseSearchService } from './expense-search.service';
import { IExpenseSearchData } from './expense-search';

@Component({
  selector: 'ec-expense-search',
  templateUrl: './expense-search.component.html',
  styleUrls: ['./expense-search.component.css']
})
export class ExpenseSearchComponent {
  
  pageTitle: string = 'Search monthly expenses'
  monthlyExpenseData: IExpenseSearchData[] = [];
  errorMessage: string = '';

  constructor(private expenseSearchService: ExpenseSearchService) {}

  getExpenseDataForDateRange(searchDateRange: string): void {
    console.log('searchDateRange: ' + searchDateRange);
    this.expenseSearchService.getMonthlyExpesnesForDateRange(searchDateRange).subscribe({
      next: expenseData => {
        this.monthlyExpenseData = expenseData;
      },
      error: err => this.errorMessage = err
    });
  }
}
