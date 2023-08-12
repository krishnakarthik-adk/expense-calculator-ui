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

  constructor(private expenseSummaryService: SummaryDataService){}

  // To do for the button click on the view

  // On page load
  ngOnInit(): void {
    // We always show the expenses for the current month on page load.

    this.expenseSummaryService.getExpenseSummaryForTheMonth().subscribe({
      next: expenseSummaryDataObject => {                      
        this.finalAmountPayabale = expenseSummaryDataObject.finalAmountPayable;       
        this.itemSummaryDataList = expenseSummaryDataObject.expenseSummaryDTOList;        
      },
      error: err => this.errorMessage = err
  });

  }
}
