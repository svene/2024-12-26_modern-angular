import {Component, computed, input, signal} from '@angular/core';

/**
 * See https://medium.com/@amosisaila/learn-when-to-use-signal-effects-in-angular-and-why-you-should-avoid-overusing-them-a0d6516032c1
 */
@Component({
  selector: 'app-d01-select',
  imports: [],
  template: `
    <ul>
      @for (option of options(); track option; ) {
        <li (click)="select($index)">item {{ option }} @if ($index === state().selectedIndex()) {SELECTED} @else {
          CLICK ME
        }</li>
      }
    </ul>
  `,
})
export class D01SelectComponent {
  options = input<string[]>();

  state = computed(() => {
    const r = {
      options: this.options(),
      selectedIndex: signal(-1) // WritableSignal inside the computed()
    };
    console.log('new state'); // NOTE: changing options from outside causes the whole state to be recalculated. Setting just 'selectedIndex' does not.
    return r;
  });

  select(idx: number): void {
    this.state().selectedIndex.set(idx);
  }

}
