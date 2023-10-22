import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

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
  // npm install @angular/material

  constructor(private clipboard: Clipboard) {}

  // Declare variable for pxValue
  numberOfPxValue = '';
  clampForPhones = '';
  clampForPcs = '';

  ngOnInit(): void {
    // Set `numberOfPxValue` with data from localStorage
    this.numberOfPxValue = localStorage.getItem('numberOfPxStorageValue')!;

    const numberOfPx = document.querySelector('.numberOfPx');
    numberOfPx?.addEventListener('keyup', this.updatePxLocalStorageValue);
  }

  updatePxLocalStorageValue(e: any) {
    localStorage.setItem('numberOfPxStorageValue', e.target.value);
  }

  copyMessageForPhonesResolution() {
    // Download value from local storage and parse it to float
    const downloadValue = parseFloat(
      localStorage.getItem('numberOfPxStorageValue')!
    );

    // Set middleValue for calculation
    let middleValue = downloadValue / 360;

    // Calculate min and max value
    let minValue = middleValue * 210;
    let maxValue = middleValue * 776;

    // End calculation for middleValue
    middleValue = middleValue * 100;

    // Set limitation for minValue for lowest iteratuions
    if (localStorage.getItem('numberOfPxStorageValue')! == '16') {
      minValue = 16;
    } else if (localStorage.getItem('numberOfPxStorageValue')! == '14') {
      minValue = 14;
    } else if (localStorage.getItem('numberOfPxStorageValue')! == '12') {
      minValue = 10;
    } else if (localStorage.getItem('numberOfPxStorageValue')! == '11') {
      minValue = 9;
    } else if (localStorage.getItem('numberOfPxStorageValue')! == '10') {
      minValue = 8;
    }

    // Create CSS `clamp()` for calculations
    this.clampForPhones = `clamp(min(${minValue.toFixed(
      2
    )}px), ${middleValue.toFixed(2)}vw, max(${maxValue.toFixed(2)}px));`;

    console.log(this.clampForPhones);

    // Return copied phrase for CSS
    return this.clipboard.copy(this.clampForPhones);
  }

  copyMessageForPcsResolution() {
    // Download value from local storage and parse it to float
    const downloadValue = parseFloat(
      localStorage.getItem('numberOfPxStorageValue')!
    );

    // Set middleValue for calculation
    let middleValue = downloadValue / 1920;

    // Calculate min and max value
    let minValue = middleValue * 776;
    let maxValue = middleValue * 1920;

    // End calculation for middleValue
    middleValue = middleValue * 100;

    // Create CSS `clamp()` for calculations
    this.clampForPcs = `clamp(min(${minValue.toFixed(
      2
    )}px), ${middleValue.toFixed(2)}vw, max(${maxValue.toFixed(2)}px));`;

    console.log(this.clampForPcs);

    // Return copied phrase for CSS
    return this.clipboard.copy(this.clampForPcs);
  }
}
