import {Component, computed, input, signal} from '@angular/core';
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
  `,
})
export class D01SelectParentComponent {
  options = signal<string[]>(['a', 'b']);

}
