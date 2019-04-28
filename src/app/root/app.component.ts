import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private items: Array<any> = [
    {title: 'Contract Compliance', percent: '80%', bgColor: '#9ACECC', percentColor: '#4C6586'},
    {title: 'Savings', percent: '30%', bgColor: '#7EAD9C'},
    {title: 'Cost Reductiions', percent: '60%', bgColor: '#2B79A4'},
    {title: 'Spend Coverage', percent: '70%', bgColor: '#4C6586'},
    {title: 'Invoice Compliance', percent: '55%', bgColor: '#0E3D57'},
  ];
}
