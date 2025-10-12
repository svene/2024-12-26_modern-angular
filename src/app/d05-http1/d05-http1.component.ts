import {Component, input, linkedSignal, signal} from '@angular/core';
import {JsonPipe, NgClass} from '@angular/common';
import {httpResource} from '@angular/common/http';

/**
 * See https://medium.com/@amosisaila/learn-when-to-use-signal-effects-in-angular-and-why-you-should-avoid-overusing-them-a0d6516032c1
 */
@Component({
  selector: 'app-d05-http1',
  template: `
    <div class="field is-grouped">
      <button class="button" (click)="callBackend()">Call Backend</button>
    </div>
    @if (user.hasValue()) {
      <div>value</div>
      <div>{{ user.value() |json  }}</div>
    } @else if (user.error()) {
      <div>error</div>
    } @else if (user.isLoading()) {
      <div>Loading user info...</div>
    }
  `,
  imports: [
    JsonPipe
  ]
})
export class D05Http1Component {

  //userId = input.required<string>();
  user = httpResource(() => ({
    url: `https://dummyjson.com/users/1`,
  }));

  callBackend(): void {
  }

}
