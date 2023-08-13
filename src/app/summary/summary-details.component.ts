import { Component, OnInit } from '@angular/core';
import { IExpenseSummaryData } from './summary-data';
import { SummaryDataService } from './summary-data-service';
import { IItemSummaryData } from './summary-item-data';

@Component({  
  templateUrl: './summary-details.component.html',
  styleUrls: ['./summary-details.component.css']
})
export class SummaryDetailsComponent implements OnInit {
  pageTitle: string = 'Summary Report for the current month.';
   
  // to extract data from the response
  itemSummaryDataList: IItemSummaryData[] = [];
  finalAmountPayabale: string = '0';

  errorMessage: string = '';
  month: string = 'None';
  year: string = 'None';

  constructor(private expenseSummaryService: SummaryDataService){}


  getExpenseSummary(): void{   

    this.expenseSummaryService.getExpenseSummaryForTheMonth(this.month, this.year).subscribe({
      next: expenseSummaryDataObject => {                      
        this.finalAmountPayabale = expenseSummaryDataObject.finalAmountPayable;       
        this.itemSummaryDataList = expenseSummaryDataObject.expenseSummaryDTOList;       
      },
      error: err => this.errorMessage = err
  });
  }  

  // On page load
  ngOnInit(): void {
    // We always show the expenses for the current month on page load.
    
    this.month  = new Date().getMonth().toString();
    this.year  = new Date().getFullYear().toString();

    this.expenseSummaryService.getExpenseSummaryForTheMonth(this.month, this.year).subscribe({
      next: expenseSummaryDataObject => {                      
        this.finalAmountPayabale = expenseSummaryDataObject.finalAmountPayable;       
        this.itemSummaryDataList = expenseSummaryDataObject.expenseSummaryDTOList;        
      },
      error: err => this.errorMessage = err
  });

  }
}
