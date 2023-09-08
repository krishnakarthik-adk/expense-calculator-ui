import {Component, EventEmitter, Output} from '@angular/core';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

/** @title Basic date range picker */
@Component({
  selector: 'ec-date-range-picker',
  templateUrl: 'date-range-picker-component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,FormsModule,
    ReactiveFormsModule,MatNativeDateModule,
],
})
export class ECDateRangePicker {
    @Output() dateRange: EventEmitter<string> = new EventEmitter<string>; // Event Emitter

    range = new FormGroup({
        startDate: new FormControl<Date | null>(null),
        endDate: new FormControl<Date | null>(null),
      });

    expenseDateRange: string = '';   
    
    getExpensesForDateRange(): void {    
      // passing locale 'en-US' is very important, otherwise it take the default format from where the device is accessing. Else we need to mention the format of the date mm/dd/yyyy.
      this.expenseDateRange = this.range.controls.startDate.getRawValue()?.toLocaleDateString('en-US') + ',' + this.range.controls.endDate.getRawValue()?.toLocaleDateString('en-US');      
      this.dateRange.emit(this.expenseDateRange);
    }
}