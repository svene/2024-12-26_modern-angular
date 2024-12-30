import {Component, computed, OnDestroy, OnInit, signal} from '@angular/core';
import {D03SelectComponent} from './d03-select.component';

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
      <button class="button is-link" (click)="selectSet(1)">use item set 1</button>
      <button class="button is-link" (click)="selectSet(2)">use item set 2</button>
    </div>
  `,
})
export class D03SelectParentComponent implements OnInit, OnDestroy {
  selectedSet = signal(1);
  options = computed(() => {
    return this.selectedSet() === 1 ? set1 : set2;
  })

  ngOnInit(): void {
    console.log('D01SelectParentComponent: init');
  }
  ngOnDestroy(): void {
    console.log('D01SelectParentComponent: destroy');
  }

  selectSet(set: number) {
    this.selectedSet.set(set);
  }

}
const set1 = ['a', 'b', 'c'];
const set2 = ['X', 'Y', 'Z'];
