import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'avo-test',
  template: `
    <avo-line-chart  *ngIf="test" [data]="test"></avo-line-chart>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  test: any[];

  constructor(private testService: TestService) { }

  ngOnInit() {
    setTimeout(() => {
      this.getData();
      // change the data periodically
      setInterval(() => this. getData(), 5000);
    }, 1000);
  }

  getData() {
    this.testService.getData().subscribe(
      data => {
        const myArray = [];
        for (const key in data) {
          if (data) {
            myArray.push(data[key]);
          } else { console.log('error'); }
        }
        this.test = myArray;
      }
    );
    console.log(this.test);
  }

}
