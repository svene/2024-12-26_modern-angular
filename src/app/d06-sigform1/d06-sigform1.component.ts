import {Component, resource, signal} from '@angular/core';
import {JsonPipe, NgClass} from '@angular/common';
import {httpResource} from '@angular/common/http';
import {z as zod} from 'zod';
import {apply, FormField, FieldState, form, required, schema, Schema} from '@angular/forms/signals';

export type FormModel = {
  id: string,
}

const UsersSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
})

const idSchema: Schema<string> = schema((path) => {
  required(path, {message: 'This field is required'});
});

@Component({
  selector: 'app-d06-sigform1',
  template: `
    <form>
      <div class="field">
        <label class="label">Id</label>
        <div class="control">
          <input
            type="text"
            class="input"
            [ngClass]="!searchForm.id().dirty() ? '' : searchForm.id().errors().length === 0 ? 'is-success' : 'is-danger'"
            [formField]="searchForm.id"
            placeholder="Enter id">
          @for (error of searchForm.id().errors(); track $index) {
            <div style="color: red">{{error.message}}</div> <!-- https://www.youtube.com/watch?v=CEAVN_pkCXU  8:50 -->
          }
        </div>
      </div>
    </form>

    <div>{{searchForm.id().value()}}</div>
    <div>touched {{searchForm.id().touched().valueOf()}}</div>
    <div>dirty {{searchForm.id().dirty().valueOf()}}</div>

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

    <hr>
    <p>
      <a href="https://www.youtube.com/watch?v=CEAVN_pkCXU">See https://www.youtube.com/watch?v=CEAVN_pkCXU</a>
    </p>


  `,
  imports: [
    FormField,
    JsonPipe,
    NgClass
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
    apply(path.id, idSchema);

    // Form submission:
    // https://www.youtube.com/watch?v=CEAVN_pkCXU 15:45
  });

  x: FieldState<string, string> = this.searchForm.id();


  reload() {
    this.user.reload();
  }
}
