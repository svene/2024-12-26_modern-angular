import {Component, resource, signal} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {httpResource} from '@angular/common/http';
import {z as zod} from 'zod';
import {Control, form} from '@angular/forms/signals';

export type FormModel = {
  id: string,
}

const UsersSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
})

@Component({
  selector: 'app-d06-sigform-http1',
  template: `
    <p>
      <a href="https://www.youtube.com/watch?v=CEAVN_pkCXU">See https://www.youtube.com/watch?v=CEAVN_pkCXU</a>
    </p>

    <form>
      <label>Id: <input type="text" [control]="searchForm.id" placeholder="Enter id"></label>
    </form>

    <div>{{searchForm.id().value()}}</div>

    @if (user.hasValue()) {
      <hr>
      <div>response:</div>
      <div>{{ user.value() |json }}</div>
      <div>Firstname: {{ user.value().firstName }}</div>
      <button class="button" (click)="reload()">Reload</button>
    } @else if (user.error()) {
      <div>error</div>
    } @else if (user.isLoading()) {
      <div>Loading user info...</div>
    }
  `,
  imports: [
    Control,
    JsonPipe
  ]
})
export class D06SigformHttp1Component {

  user = httpResource(
    () => ({
      url: `https://dummyjson.com/users/${this.searchForm.id().value()}`,
    }),
    {
      parse: UsersSchema.parse,
    }
  );

  protected readonly formModel = signal<FormModel>({
    id: '1',
  })

  protected readonly searchForm = form(this.formModel);


  reload() {
    this.user.reload();
  }
}
