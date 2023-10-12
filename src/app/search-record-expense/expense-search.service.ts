import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap, throwError } from 'rxjs';
import { IExpenseSearchData } from './expense-search';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseSearchService {

  searchMonthlyExpesneByDateRangeUrl = environment.HOST_URL + environment.SEARCH_MONTHLY_EXPENSE_DATE_RANGE_API;
  searchMonthlyExpesneByCategory = environment.HOST_URL + environment.SEARCH_MONTHLY_EXPENSE_BY_CATEGORY_API;
  
  selectdDates: string[] | undefined;

  constructor(private http: HttpClient) { }

  getMonthlyExpesnesForDateRange(searchDateRange: string): Observable<IExpenseSearchData []> {
    console.log('searchDateRange Received: ' + searchDateRange);
    
    this.selectdDates = searchDateRange.split(',');

    return this.http.get<IExpenseSearchData[]>(this.searchMonthlyExpesneByDateRangeUrl + '?strStartDate=' + this.selectdDates[0] + '&strEndDate=' + this.selectdDates[1]).pipe(
      tap(data => console.log('All', JSON.stringify(data))), // this is to look through the observable
      catchError(this.handleError)
    );
  }

  // For modal pop-up for expense details on the summary screen
  getMonthlyExpenseForDateRangeByCategory(dateRange: string, category: string): Observable<IExpenseSearchData []>{
    console.log('searchDateRange Received: ' + dateRange);
    
    this.selectdDates = dateRange.split(',');

    return this.http.get<IExpenseSearchData[]>(this.searchMonthlyExpesneByCategory + '/' + category + '?strStartDate=' + this.selectdDates[0] + '&strEndDate=' + this.selectdDates[1]).pipe(
      tap(data => console.log('All', JSON.stringify(data))), // this is to look through the observable
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
