import {Component, OnDestroy, OnInit, signal} from '@angular/core';
import {D01SelectComponent} from './d01-select.component';

/**
 * See https://medium.com/@amosisaila/learn-when-to-use-signal-effects-in-angular-and-why-you-should-avoid-overusing-them-a0d6516032c1
 */
@Component({
  selector: 'app-d01-select-parent',
  imports: [
    D01SelectComponent
  ],
  template: `
    <h2>Demo 01: Select</h2>
    <div>Taken from <a href="https://medium.com/@amosisaila/learn-when-to-use-signal-effects-in-angular-and-why-you-should-avoid-overusing-them-a0d6516032c1" target="_blank">here</a> </div>
    <app-d01-select [options]="options()"></app-d01-select>
    <button (click)="useSet1()">use item set 1</button>
    <button (click)="useSet2()">use item set 2</button>
  `,
})
export class D01SelectParentComponent implements OnInit, OnDestroy {
  options = signal<string[]>(['a', 'b']);

  ngOnInit(): void {
    console.log('D01SelectParentComponent: init');
  }
  ngOnDestroy(): void {
    console.log('D01SelectParentComponent: destroy');
  }

  useSet1() {
    this.options.set(['X', 'Y', 'Z'])
  }

  useSet2() {
    this.options.set(['a', 'b', 'c'])
  }

}
