import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = 'my password';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  onButtonClick() {
    this.password = 'a new password';
    console.log('Button is clicked!!');
  }
  toggleCheckBox(box) {
    console.log('box', box);
    this[box] = !this[box];
    console.log('this[box]', this[box]);
    console.log('this.useSymbols', this.useSymbols);
    console.log('this.useNumbers', this.useNumbers);
  }
}
