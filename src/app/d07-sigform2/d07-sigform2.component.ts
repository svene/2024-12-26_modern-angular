import {Component, signal} from '@angular/core';
import {httpResource} from '@angular/common/http';
import {z as zod} from 'zod';
import {apply, Control, form, minLength, required, schema, Schema} from '@angular/forms/signals';

export type FormModel = {
  id: string,
  name: string,
  withName: boolean,
}

const UsersSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
})

const idFieldSchema: Schema<string> = schema((path) => {
  required(path, {
    message: 'This field is required'}
  );
});

const nameFieldSchema: Schema<string> = schema((path) => {
  minLength(path, 3, {
    message: 'This field is too short'
  });
});

@Component({
  selector: 'app-d07-sigform2',
  template: `
    <p>
      <a href="https://www.youtube.com/watch?v=CEAVN_pkCXU">See https://www.youtube.com/watch?v=CEAVN_pkCXU</a>
    </p>

    <form>
      <div>
      <label>Id: <input type="text" [control]="searchForm.id" placeholder="Enter id"></label>
      @for (error of searchForm.id().errors(); track $index) {
        <div style="color: red">{{ error.message }}</div> <!-- https://www.youtube.com/watch?v=CEAVN_pkCXU  8:50 -->
      }
      </div>

      <div>
      <label>Name: <input type="text" [control]="searchForm.name" placeholder="Enter name"></label>
      @for (error of searchForm.name().errors(); track $index) {
        <div style="color: red">{{ error.message }}</div>
      }
      </div>
      <div>
      <label>Enable: <input type="checkbox" [control]="searchForm.withName"></label>
      </div>
    </form>

    <div>{{ searchForm.id().value() }}</div>

    @if (user.hasValue()) {
      <hr>
      <div>response:</div>
      <div>Firstname: {{ user.value().firstName }}</div>
      <button class="button" (click)="reload()">Reload</button>
    } @else if (user.error()) {
      <div>error</div>
    } @else if (user.isLoading()) {
      <div>Loading user info...</div>
    }
  `,
  imports: [
    Control
  ]
})
export class D07Sigform2Component {

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
    name: '',
    withName: false,
  })

  protected readonly searchForm = form(this.formModel, (path) => {
    apply(path.id, idFieldSchema);
    required(path.name, {
      // multi-field validation (e.g. apply required of input field only when other checkbox is checked: https://www.youtube.com/watch?v=CEAVN_pkCXU 14:30)
      when: ({valueOf}) => valueOf(path.withName) === true,
      message: 'This field is required'
    });
    // apply(path.name, nameFieldSchema);

    // multi-field validation (e.g. apply required of input field only when other checkbox is checked: https://www.youtube.com/watch?v=CEAVN_pkCXU 14:30)


    // Form submission:
    // https://www.youtube.com/watch?v=CEAVN_pkCXU 15:45
  });


  reload() {
    this.user.reload();
  }
}
