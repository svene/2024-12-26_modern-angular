import {Component, resource, signal} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {httpResource} from '@angular/common/http';
import {z as zod} from 'zod';
import {apply, Control, form, required, schema, Schema} from '@angular/forms/signals';

export type FormModel = {
  id: string,
}

const UsersSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
})

const searchFormSchema: Schema<string> = schema((path) => {
  required(path, {message: 'This field is required'});
});

@Component({
  selector: 'app-d06-sigform1',
  template: `
    <p>
      <a href="https://www.youtube.com/watch?v=CEAVN_pkCXU">See https://www.youtube.com/watch?v=CEAVN_pkCXU</a>
    </p>

    <form>
      <label>Id: <input type="text" [control]="searchForm.id" placeholder="Enter id"></label>
      @for (error of searchForm.id().errors(); track $index) {
        <div style="color: red">{{error.message}}</div> <!-- https://www.youtube.com/watch?v=CEAVN_pkCXU  8:50 -->
      }
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
export class D06Sigform1Component {

  user = httpResource(
    () => {
      // https://www.youtube.com/watch?v=GXzPlaF3-bE   23:42
      return this.searchForm().valid() ? `https://dummyjson.com/users/${this.searchForm.id().value()}` : undefined;
    },
    {
      parse: UsersSchema.parse,
    }
  );

  protected readonly formModel = signal<FormModel>({
    id: '',
  })

  protected readonly searchForm = form(this.formModel, (path) => {
    apply(path.id, searchFormSchema);

    // NOTE (not needed here):
    // multi-field validation (e.g. apply required of input field only when other checkbox is checked: https://www.youtube.com/watch?v=CEAVN_pkCXU 14:30)

    // Form submission:
    // https://www.youtube.com/watch?v=CEAVN_pkCXU 15:45
  });


  reload() {
    this.user.reload();
  }
}
