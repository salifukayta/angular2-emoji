import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testModel: string;
  testModel2: string;
  testModel3: string;
  testModel4: string;
  pressedCount: number = 0;
  enterTest() {
    this.testModel = '';
    this.testModel2 = '';
    this.testModel3 = '';
    this.testModel4 = '';
  }
}
