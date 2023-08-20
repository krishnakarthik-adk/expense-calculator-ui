import { Component, OnInit } from '@angular/core';
import { IWaterDairyExpense } from './water-dairy';
import { NgForm } from '@angular/forms';
import { WaterDairyService } from './water-dairy.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'ec-water-dairy',
  templateUrl: './water-dairy.component.html',
  styleUrls: ['./water-dairy.component.css']
})
export class WaterDairyComponent implements OnInit {

  pageTitle: string = 'Water and dairy expense';
  dateOfExpense: string = '';
  httpPostResponse: boolean = false;

  waterDairyInput: IWaterDairyExpense = {
    item: 'None',
    quantity: 0,
    unitPrice: 0,
    comments: ''
  }

  dynamicArray: IWaterDairyExpense[] = [];

  constructor(private waterDairyService: WaterDairyService) {}

  addRow(): void {
    this.dynamicArray.push({
      item: 'None',
      quantity: 0,
      unitPrice: 0,
      comments: ''
    });
  }

  deleteRow(index: number): void {
    this.dynamicArray.splice(index);
  }

  ngOnInit(): void {
    this.dynamicArray.push(this.waterDairyInput);
  }

  onSubmit(form: NgForm): void {
    console.log(form.value);
    this.dateOfExpense = formatDate(this.dateOfExpense, 'MM/dd/yyyy', 'en-US'); 
    this.waterDairyService.recordWaterAndDairyExpense(this.dynamicArray, this.dateOfExpense).subscribe({
      next: response => {
        console.log('Response: ' + response);
          this.httpPostResponse = true;
          this.dynamicArray = [{            
              item: 'None',
              quantity: 0,
              unitPrice: 0,
              comments: ''            
          }];
      },
      error: err => console.log('error: ' + err)
    })

  }

  // Use this when we read the values from the database.
  // onSelectChange(selectOption: string, index: number): void {
  //   console.log('Option selected: ' + selectOption);
  //   if(selectOption === 'curd') {
  //     this.dynamicArray[index].unitPrice = 24;
  //   } else if(selectOption === 'milk') {
  //     this.dynamicArray[index].unitPrice = 26;
  //   } else if(selectOption === 'water') {
  //     this.dynamicArray[index].unitPrice = 30;
  //   } else {
  //     this.dynamicArray[index].unitPrice = 0;
  //   }
  // }
}
