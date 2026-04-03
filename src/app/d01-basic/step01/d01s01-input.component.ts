import {Component, signal, Signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-d01-s01-input',
  imports: [
    FormsModule
  ],
  template: `
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
export class D01s01InputComponent {
  inputvalue = signal('');


}
