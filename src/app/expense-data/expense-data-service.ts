import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IExpenseData } from "./expense-data-list";
import { Injectable } from "@angular/core";
import { Observable, tap, catchError, throwError } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn:'root'
})
export class ExpenseDataService {

    //private expenseDataUrl = 'assets/expense-data.json'; // Hard coded data from the assets folder for quick test
    // private expenseDataUrl = "api/v1/getWaterAndExpenseData" // From the spring boot app
    private expenseDataUrl = "api/v1/getWaterAndExpenseData" // From the spring boot app, takes date range
    private expenseDataForDateRangeUrl = environment.HOST_URL + environment.GET_WATER_DAIRY_EXPENSES_DATE_RANGE_API;
    selectdDates: string[] | undefined;

    constructor(private http: HttpClient){}

    getExpenseData(): Observable<IExpenseData[]> {        
        return this.http.get<IExpenseData[]>(this.expenseDataUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))), // this is to look through the observable
            catchError(this.handleError)
        );
    }

    getExpenseDataForDateRange(dateRange: string):Observable<IExpenseData[]> {
        this.selectdDates = dateRange.split(',');       
        // alert('Final URL: ' + this.expenseDataForDateRangeUrl+'?strStartDate=' + this.dates[0] + '&strEndDate=' + this.dates[1]);
        return this.http.get<IExpenseData[]>(this.expenseDataForDateRangeUrl+'?strStartDate=' + this.selectdDates[0] + '&strEndDate=' + this.selectdDates[1]).pipe(
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