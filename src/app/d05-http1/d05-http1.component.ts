import {Component} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {httpResource} from '@angular/common/http';

export interface X {
  firstName: string,
}
@Component({
  selector: 'app-d05-http1',
  template: `
    <div class="field is-grouped">
      <button class="button">Call Backend</button>
    </div>
    @if (user.hasValue()) {
      <div>value</div>
      <div>{{ user.value() |json }}</div>
      <hr>
      <div>Firstname: {{ user.value().firstName }}</div>
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
  user = httpResource<X | undefined>(() => ({
    url: `https://dummyjson.com/users/1`,
  }));

  callBackend(): void {
  }

}
