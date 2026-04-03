import {Component, signal, Signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-d01-s01-input',
  imports: [
    FormsModule
  ],
  template: `
    <h6 class="title is-6">D01 S01 Input Demo</h6>
    <div class="level">
      <input class="input level-left" [(ngModel)]="inputvalue">
      <button class="button level-right" (click)="inputvalue.set('button-value')"> Set value</button>
    </div>

    <pre class="mt-3">
      Two-way binding works with an input element and a simple signal.

      signal-value: {{inputvalue()}}
    </pre>
  `,
})
export class D01S01InputComponent {
  inputvalue = signal('');


}
