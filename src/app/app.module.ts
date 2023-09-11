import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseDataComponent } from './search-water-dairy-expense/expense-data-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome-component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ECDateRangePicker } from './common/date-range-picker.component';
import { SummaryDetailsComponent } from './expense-summary/summary-details.component';
import { FooterComponent } from './common/footer.component';
import { ExpenseInputComponent } from './record-expense/expense-input.component';


import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { WaterDairyComponent } from './water-dairy/water-dairy.component';
import { ExpenseSearchComponent } from './search-record-expense/expense-search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent, ExpenseDataComponent, WelcomeComponent, SummaryDetailsComponent, FooterComponent, ExpenseInputComponent, WaterDairyComponent, ExpenseSearchComponent, PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,    
    RouterModule.forRoot([      
      {path: 'welcome', component: WelcomeComponent},
      {path: 'expenseData', component: ExpenseDataComponent},
      {path: 'summaryData', component: SummaryDetailsComponent},
      {path: 'expenseInput', component: ExpenseInputComponent},
      {path: 'waterdairyExpenseInput', component: WaterDairyComponent},
      {path: 'searchMonthlyExpense', component: ExpenseSearchComponent},
      {path: '', component: WelcomeComponent},
      {path: '**', component: PageNotFoundComponent}
    ]),
    NgbModule,
    ECDateRangePicker,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
