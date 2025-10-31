import {Component, computed, input,} from '@angular/core';
import {MinValidationError, ValidationError} from '@angular/forms/signals';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-d09s03-validation-errors',
  imports: [
    JsonPipe
  ],
  template: `
    @if (errorMessages().length > 0) {
      <div class="validation-errors">
        @for (message of errorMessages(); track message) {
          <p class="help is-danger">{{ message }}</p>
        }
        <div>errors: {{errors() | json}}</div>
      </div>
    }
  `
})
export class ValidationErrorsComponent {
  errors = input.required<ValidationError[]>();

  errorMessages = computed(() =>
    toErrorMessages(this.errors())
  );
}

function toErrorMessages(
  errors: ValidationError[]
): string[] {
  return errors.map((error) => {
    return error.message ?? toMessage(error);
  });
}

function toMessage(error: ValidationError): string {
  switch (error.kind) {
    case 'required':
      return 'Enter a value!';
    case 'min':
      const minError = error as MinValidationError;
      return `Minimum amount: ${minError.min}`;
    default:
      return error.kind ?? 'Validation Error';
  }
}
