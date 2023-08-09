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
import { NgbdDatepickerRangePopup } from './shared/date-picker-popup';

@NgModule({
  declarations: [
    AppComponent, ExpenseDataComponent, WelcomeComponent 
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
      {path: '', component: WelcomeComponent}
    ]),
    NgbModule,    
    NgbdDatepickerRangePopup     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
