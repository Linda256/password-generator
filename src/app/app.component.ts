import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  pwLength = 0;
  disable = true;

  onButtonClick() {
    // this.password = 'a new password';

    console.log('this.useSymbols', this.useSymbols);
    console.log('this.useNumbers', this.useNumbers);
    console.log('this.useLetters', this.useLetters);
    // console.log('this.pwLength', this.pwLength);

    // console.log('Button is clicked!!');
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=~';
    let validChar = '';
    if (this.useSymbols) {
      validChar += symbols;
    }
    if (this.useNumbers) {
      validChar += numbers;
    }
    if (this.useLetters) {
      validChar += letters;
    }
    let length = this.pwLength;
    console.log('validChar', validChar);
    let password = '';
    while (length > 0) {
      let i = Math.floor(Math.random() * validChar.length);
      password += validChar[i];
      length--;
    }
    this.password = password;
  }

  toggleCheckBox(box: string) {
    //console.log('box', box);
    this[box] = !this[box];
    // console.log('this[box]', this[box]);
    // console.log('this.useSymbols', this.useSymbols);
    // console.log('this.useNumbers', this.useNumbers);
  }

  onChangeLength(value: string) {
    //let length = Number(value);
    let length = parseInt(value);
    if (!isNaN(length)) {
      this.pwLength = length;
    } else {
      this.pwLength = 0;
    }
  }
}
