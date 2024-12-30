import {Component, computed, OnDestroy, OnInit, signal, ViewChild} from '@angular/core';
import {D03SelectComponent} from './d03-select.component';
import {BehaviorSubject} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';

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
      <button class="button is-link" (click)="btnClick$$.next(1)">use item set 1</button>
      <button class="button is-link" (click)="btnClick$$.next(2)">use item set 2</button>
    </div>
  `,
})
export class D03SelectParentComponent implements OnInit, OnDestroy {
  btnClick$$ = new BehaviorSubject<number>(1);
  btnClick = toSignal(this.btnClick$$)
  options = computed(() => {
    return this.btnClick() === 1 ? ['a', 'b', 'c'] : ['X', 'Y', 'Z'];
  })

  ngOnInit(): void {
    console.log('D01SelectParentComponent: init');
  }
  ngOnDestroy(): void {
    console.log('D01SelectParentComponent: destroy');
  }

}
