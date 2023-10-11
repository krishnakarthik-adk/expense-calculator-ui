import { Component, OnInit } from '@angular/core';
import { SummaryDataService } from './summary-data-service';
import { IItemSummaryData } from './summary-item-data';
import { ExpenseDataService } from '../search-water-dairy-expense/expense-data-service';
import { IExpenseData } from '../search-water-dairy-expense/expense-data-list';

@Component({
  templateUrl: './summary-details.component.html',
  styleUrls: ['./summary-details.component.css']
})
export class SummaryDetailsComponent implements OnInit {
  pageTitle: string = 'Summary Report';

  // to extract data from the response
  itemSummaryDataList: IItemSummaryData[] = [];
  finalAmountPayabale: string = '0';

  monthlyExpenseDataList: IItemSummaryData[] = [];
  totalMonthlyExpense: string = '0';
  // This is to hold the data for the water and dairy expense details modal pop-up
  waterAndDairyExpenseDataList: IExpenseData[] = [];

  errorMessage: string = '';
  month: string = 'None';
  year: string = 'None';
  dateRange: string = '';
  popUpRequestedFor: string = '';

  constructor(private expenseSummaryService: SummaryDataService,private waterAndDairyExpenseService: ExpenseDataService) { }


  getExpenseSummary(): void {
    
    this.expenseSummaryService.getWaterAndDairyMonthlyExpense(this.month, this.year).subscribe({
      next: expenseSummaryDataObject => {
        this.finalAmountPayabale = expenseSummaryDataObject.finalAmountPayable;
        this.itemSummaryDataList = expenseSummaryDataObject.expenseSummaryDTOList;
      },
      error: err => this.errorMessage = err
    });

    this.expenseSummaryService.getMonthlyExpense(this.month, this.year).subscribe({
      next: monthlyExpenseDataObject => {        
        this.totalMonthlyExpense = monthlyExpenseDataObject.finalAmountPayable;
        this.monthlyExpenseDataList = monthlyExpenseDataObject.expenseSummaryDTOList;
      },
      error: err => this.errorMessage = err
    });
  }  
  // Modal pop-up
  getWaterAndDairyExpenseDetailsForPopUp(item: string): void {
    const firstDay = new Date(parseInt(this.year), parseInt(this.month)-1, 1 );
    const lastDay = new Date(parseInt(this.year), (parseInt(this.month)-1) + 1,0 );

    this.popUpRequestedFor = item;

    this.dateRange = firstDay.toLocaleDateString('en-EN') + ',' + lastDay.toLocaleDateString('en-EN');
    
    this.waterAndDairyExpenseService.getWaterAndDairyExpenseDetailsForPopUp(this.dateRange, item).subscribe({
        next: waterAndDAiryDataList => {
            this.waterAndDairyExpenseDataList = waterAndDAiryDataList;               
        },
        error: err => this.errorMessage = err
    });
}


  // On page load
  ngOnInit(): void {
    // We always show the expenses for the current month on page load.
    // We add 1 to the month because, the JS deals from index 0 for months Jan-0, Feb-1 etc.
    this.month = (new Date().getMonth() + 1).toString();
    this.year = new Date().getFullYear().toString();

    this.expenseSummaryService.getWaterAndDairyMonthlyExpense(this.month, this.year).subscribe({
      next: expenseSummaryDataObject => {
        this.finalAmountPayabale = expenseSummaryDataObject.finalAmountPayable;
        this.itemSummaryDataList = expenseSummaryDataObject.expenseSummaryDTOList;
      },
      error: err => this.errorMessage = err
    });

    this.expenseSummaryService.getMonthlyExpense(this.month, this.year).subscribe({
      next: monthlyExpenseDataObject => {        
        this.totalMonthlyExpense = monthlyExpenseDataObject.finalAmountPayable;
        this.monthlyExpenseDataList = monthlyExpenseDataObject.expenseSummaryDTOList;
      },
      error: err => this.errorMessage = err
    });

  }
}
