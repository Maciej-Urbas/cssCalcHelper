import { Component, OnInit } from '@angular/core';
// import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// ngOnInit() work for scripts with Angular;
// Need to add `implements OnInit` for class declaration
//    and `, OnInit` for import statement.
export class AppComponent implements OnInit {
  title = 'cssCalcHelper';

  // FOR 20.10.2023 A.D.
  // npm install @angular/cdk

  // Declare variable for pxValue
  numberOfPxValue = '';
  clampForPhones = '';

  ngOnInit(): void {
    // Set `numberOfPxValue` with data from localStorage
    this.numberOfPxValue = localStorage.getItem('numberOfPxStorageValue')!;

    const numberOfPx = document.querySelector('.numberOfPx');
    numberOfPx?.addEventListener('keyup', this.updatePxLocalStorageValue);
  }

  updatePxLocalStorageValue(e: any) {
    localStorage.setItem('numberOfPxStorageValue', e.target.value);
  }

  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
  valFunction(val: string) {
    return 'asd';
  }
}
