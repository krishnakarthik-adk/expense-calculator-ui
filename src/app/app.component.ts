import { Component } from '@angular/core';

@Component({
  selector: 'ec-root',
  template: `
    <div >
      <h1>{{pageTitle}}</h1>
      <ec-expenselist></ec-expenselist>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Expense Calculator, your personal expense keeper.';
}
