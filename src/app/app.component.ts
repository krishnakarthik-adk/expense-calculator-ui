import { Component } from '@angular/core';

@Component({
  selector: 'ec-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Expense Calculator';
  appCaption = 'your personal expense keeper.'
}
