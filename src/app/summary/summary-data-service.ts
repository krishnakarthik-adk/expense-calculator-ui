import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IExpenseSummaryData } from "./summary-data";
import { Observable, tap, catchError, throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})
export class SummaryDataService {
    private summaryDataServiceUrl = environment.HOST_URL + environment.SUMMARY_DATA_API;
    private expenseSummaryUrl = environment.HOST_URL + environment.MONTHLY_EXPENSE_SUMMARY_API;

    constructor(private http: HttpClient){}

    getWaterAndDairyMonthlyExpense(month: string, year:string): Observable<IExpenseSummaryData> {
        return this.http.get<IExpenseSummaryData>(this.summaryDataServiceUrl+'?month=' + month + '&year=' + year).pipe(
            tap(data => console.log('All', JSON.stringify(data))), // this is to look through the observable
            catchError(this.handleError)
        );
    }

    getMonthlyExpense(month: string, year:string): Observable<IExpenseSummaryData> {
      return this.http.get<IExpenseSummaryData>(this.expenseSummaryUrl+'?month=' + month + '&year=' + year).pipe(
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