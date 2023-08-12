import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

/** @title Select with 2-way value binding */
@Component({
  selector: 'select-year',
  templateUrl: 'select-year-component.html',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
})
export class ECYearSelectComponent {
  selected = 'option2';
}