import { Component } from '@angular/core';

@Component({
  selector: 'ec-root',
  template: `                           
              <nav class='navbar navbar-expand navbar-light bg-light'>
                  <a class='navbar-brand'>{{pageTitle}}</a>
                  <ul class='nav nav-pills'>
                    <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
                    <li><a class='nav-link' routerLinkActive='active' routerLink='/expenseData'>Water And Dairy Expenses</a></li>
                    <li><a class='nav-link'></a></li>
                    <li><a class='nav-link' routerLinkActive='active' routerLink='/summaryData'>Expense Summary</a></li>
                  </ul>
              </nav>
              <div class='container'>
                <router-outlet></router-outlet>
              </div>
          `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Expense Calculator, your personal expense keeper.';
}
