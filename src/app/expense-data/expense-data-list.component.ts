import { Component, OnInit } from "@angular/core";
import { IExpenseData } from "./expense-data-list";
import { ExpenseDataService } from "./expense-data-service";

@Component({    
    templateUrl: './expense-data-list.component.html',
    styleUrls:['./expense-data-list.component.css']
})
export class ExpenseDataComponent implements OnInit {
    
    pageTitle: string = 'Expense Report ';
    imageUrl: string = "assets/images/milk.jpg";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;    
    private _listFilter = '';
    expenseDataList: IExpenseData[] = [];
    filteredExpenseDataList: IExpenseData[] = [];
    errorMessage: string = '';

    startDate: string | undefined;  
    
    datesSelected ?: string;

    constructor(private expenseDataService:ExpenseDataService){} // Dependency Injection

    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string) {
      this._listFilter = value;
      this.filteredExpenseDataList = this.performFilter(value);
    } 
    
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    getExpenseDataForDateRange(expenseDateRange: string): void{               
        this.expenseDataService.getExpenseDataForDateRange(expenseDateRange).subscribe({
            next: expenseDataList => {
                this.expenseDataList = expenseDataList;
                this.filteredExpenseDataList = this.performFilter(this._listFilter);
            },
            error: err => this.errorMessage = err
        });
    }

    // On Page load
    ngOnInit(): void {
        // We always show the expenses for the current day on page load.
        const expenseStartDate = new Date().toLocaleDateString();
        const expenseEndDate = new Date().toLocaleDateString();
        
        this.datesSelected = expenseStartDate.concat(',').concat( expenseEndDate);

        this.expenseDataService.getExpenseDataForDateRange(this.datesSelected).subscribe({
            next: expenseDataList => {
                this.expenseDataList = expenseDataList;
                this.filteredExpenseDataList = this.performFilter(this._listFilter);
            },
            error: err => this.errorMessage = err
        });
        
    }

    performFilter(filterBy: string): IExpenseData[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.expenseDataList.filter((product: IExpenseData) =>
          product.item.toLocaleLowerCase().includes(filterBy));
    }
}