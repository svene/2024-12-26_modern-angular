import {Component, input, linkedSignal, signal} from '@angular/core';
import {NgClass} from '@angular/common';

/**
 * See https://medium.com/@amosisaila/learn-when-to-use-signal-effects-in-angular-and-why-you-should-avoid-overusing-them-a0d6516032c1
 */
@Component({
  selector: 'app-d01-select',
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
export class D01SelectComponent {
  options = input<string[]>();
  selectedIndex = linkedSignal(() => {
    this.options();
    return -1;
  });

  select(idx: number): void {
    this.selectedIndex.set(idx);
  }

}
