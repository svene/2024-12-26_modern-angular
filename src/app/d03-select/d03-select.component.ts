import {Component, input, linkedSignal, signal} from '@angular/core';
import {NgClass} from '@angular/common';

/**
 * Like d01-select but using a BehaviorSubject for the button-clicks and toSignal()
 */
@Component({
  selector: 'app-d03-select',
  imports: [
    NgClass
  ],
  template: `
    <div class="field is-grouped">
      @for (option of options(); track option; ) {
        <button class="button is-link" [ngClass]="{'is-link': $index === selectedIndex()}" (click)="select($index)">item {{ option }}</button>
      }
    </div>
  `,
})
export class D03SelectComponent {
  options = input<string[]>();

  selectedIndex = linkedSignal({
    source: this.options,
    computation: (n, o) => -1,
  });

  select(idx: number): void {
    this.selectedIndex.set(idx);
  }

}
