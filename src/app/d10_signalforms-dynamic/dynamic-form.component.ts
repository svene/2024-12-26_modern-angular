import {Component, input} from '@angular/core';
import {FieldDef} from './model';
import {Field, FieldState} from '@angular/forms/signals';
import {ValidationErrorsComponent} from './common/validation-errors.component';

@Component({
  selector: 'app-dynamic-form',
  template: `
    @for(fieldDef of metaInfo(); track fieldDef.name) {

      @let field = $any(dynamicForm())[fieldDef.name];

      <div class="form-group">
        <label>
          {{ fieldDef.label }}
          <input
            class="{{fieldDef.type}}"
            [type]="fieldDef.type"
            [field]="field"
          />
        </label>
        <app-validation-errors
          [errors]="field().errors()"
        ></app-validation-errors>
      </div>
    }
  `,
  imports: [
    Field,
    ValidationErrorsComponent
  ]
})
export class DynamicFormComponent {

  metaInfo = input.required<FieldDef[]>()
  dynamicForm = input.required<() => FieldState<unknown>>();

}
