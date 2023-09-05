import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWaterDairyExpense } from './water-dairy';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WaterDairyService {

  constructor(private http: HttpClient) { }

  private recordWaterAndDairyExpenseUrl: string = environment.HOST_URL + environment.SAVE_WATER_DAIRY_EXPENSE_API;

  recordWaterAndDairyExpense(waterairyExpenseData: IWaterDairyExpense[], dateOfExpense: string): Observable<any> {
    return this.http.post(this.recordWaterAndDairyExpenseUrl + '?dateOfExpense=' + dateOfExpense, waterairyExpenseData);
  }
}
