import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseDataComponent } from './expense-data/expense-data-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome-component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ECDateRangePicker } from './common/date-range-picker.component';
import { SummaryDetailsComponent } from './summary/summary-details.component';
import { ECMonthSelectComponent} from './common/select-month.component';
import { ECYearSelectComponent } from './common/select-year.component';
import { FooterComponent } from './common/footer.component';
import { ExpenseInputComponent } from './expense-input/expense-input.component';

@NgModule({
  declarations: [
    AppComponent, ExpenseDataComponent, WelcomeComponent, SummaryDetailsComponent, FooterComponent, ExpenseInputComponent
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
      {path: '', component: WelcomeComponent}
    ]),
    NgbModule,
    ECDateRangePicker,
    ECMonthSelectComponent,
    ECYearSelectComponent, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
