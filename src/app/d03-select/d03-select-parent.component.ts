import {Component, computed, OnDestroy, OnInit} from '@angular/core';
import {D03SelectComponent} from './d03-select.component';
import {RxjsSignal} from '../support/RxjsSignal';

/**
 * See https://medium.com/@amosisaila/learn-when-to-use-signal-effects-in-angular-and-why-you-should-avoid-overusing-them-a0d6516032c1
 */
@Component({
  selector: 'app-d03-select-parent',
  imports: [
    D03SelectComponent
  ],
  template: `
    <app-d03-select [options]="options()"></app-d03-select>
    <hr>
    <div class="field is-grouped">
      <button class="button is-link" (click)="selectedSet.subject.next(1)">use item set 1</button>
      <button class="button is-link" (click)="selectedSet.subject.next(2)">use item set 2</button>
    </div>
  `,
})
export class D03SelectParentComponent implements OnInit, OnDestroy {
  selectedSet = new RxjsSignal<number>(1);
  options = computed(() => {
    return this.selectedSet.signal() === 1 ? ['a', 'b', 'c'] : ['X', 'Y', 'Z'];
  })

  ngOnInit(): void {
    console.log('D01SelectParentComponent: init');
  }
  ngOnDestroy(): void {
    console.log('D01SelectParentComponent: destroy');
  }

}
