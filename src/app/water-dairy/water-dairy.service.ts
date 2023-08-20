import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWaterDairyExpense } from './water-dairy';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WaterDairyService {

  constructor(private http: HttpClient) { }

  private recordWaterAndDairyExpenseUrl: string = '/api/v1/saveWaterAndDairyExpense';

  recordWaterAndDairyExpense(waterairyExpenseData: IWaterDairyExpense[], dateOfExpense: string): Observable<any> {
    return this.http.post(this.recordWaterAndDairyExpenseUrl + '?dateOfExpense=' + dateOfExpense, waterairyExpenseData);
  }
}
