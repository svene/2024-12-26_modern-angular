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
    <app-d01-select [options]="options()"></app-d01-select>
    <hr>
    <div class="field is-grouped">
    <button class="button is-link" (click)="useSet1()">use item set 1</button>
    <button class="button is-link" (click)="useSet2()">use item set 2</button>
    </div>
    <hr>
    <div>Taken from <a href="https://medium.com/@amosisaila/learn-when-to-use-signal-effects-in-angular-and-why-you-should-avoid-overusing-them-a0d6516032c1" target="_blank">here</a> </div>
  `,
})
export class D01SelectParentComponent implements OnInit, OnDestroy {
  options = signal<string[]>(set1);

  ngOnInit(): void {
    console.log('D01SelectParentComponent: init');
  }
  ngOnDestroy(): void {
    console.log('D01SelectParentComponent: destroy');
  }

  useSet1() {
    this.options.set(set1)
  }

  useSet2() {
    this.options.set(set2)
  }

}

const set1 = ['a', 'b', 'c'];
const set2 = ['X', 'Y', 'Z'];
