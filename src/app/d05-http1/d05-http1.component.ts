import {Component, resource} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {httpResource} from '@angular/common/http';
import {z as zod} from 'zod';

export interface X {
  firstName: string,
}

const UsersSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
})

@Component({
  selector: 'app-d05-http1',
  template: `
    <p>
      <a href="https://www.youtube.com/watch?v=W7-lsoL-Gi8">See https://www.youtube.com/watch?v=W7-lsoL-Gi8</a>
      <a href="https://www.youtube.com/watch?v=GXzPlaF3-bE&t=2s">See https://www.youtube.com/watch?v=GXzPlaF3-bE&t=2s</a>
    </p>
    @if (user.hasValue()) {
      <div>value</div>
      <div>{{ user.value() |json }}</div>
      <hr>
      <div>Firstname (via httpResource): {{ user.value().firstName }}</div>
      <button class="button" (click)="reload()">Reload</button>
    } @else if (user.error()) {
      <div>error</div>
    } @else if (user.isLoading()) {
      <div>Loading user info...</div>
    }
    <div>Firstname (via resource) 0 : {{ user0.value()?.firstName }}</div>
  `,
  imports: [
    JsonPipe
  ]
})
export class D05Http1Component {

  user0 = resource<X, unknown>({
      loader: async () => {
        const u = await fetch(`https://dummyjson.com/users/1`);
        if (!u.ok) throw new Error('load error');
        return await u.json();
      }
    }
  );

  user = httpResource(
    () => `https://dummyjson.com/users/1`,
    {
      parse: UsersSchema.parse,
    }
  );


  reload() {
    this.user.reload();
  }
}
