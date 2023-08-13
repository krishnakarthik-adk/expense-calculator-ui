import { Component, OnInit } from '@angular/core';
import { IExpenseSummaryData } from './summary-data';
import { SummaryDataService } from './summary-data-service';
import { IItemSummaryData } from './summary-item-data';

@Component({  
  templateUrl: './summary-details.component.html',
  styleUrls: ['./summary-details.component.css']
})
export class SummaryDetailsComponent implements OnInit {
  pageTitle: string = 'Summary Report';
   
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
    // We add 1 to the month because, the JS deals from index 0 for months Jan-0, Feb-1 etc.
    this.month  = (new Date().getMonth() + 1) .toString();
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
