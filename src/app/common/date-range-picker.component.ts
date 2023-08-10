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
        this.expenseDateRange = this.range.controls.startDate.getRawValue()?.toLocaleDateString() + ',' + this.range.controls.endDate.getRawValue()?.toLocaleDateString();        
        this.dateRange.emit(this.expenseDateRange);
    }
}