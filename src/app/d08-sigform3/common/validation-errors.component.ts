import {Component, computed, input,} from '@angular/core';
import {MinValidationError, ValidationError} from '@angular/forms/signals';

@Component({
  selector: 'app-validation-errors',
  imports: [
  ],
  template: `
    @if (errorMessages().length > 0) {
      <div class="validation-errors">
        @for (message of errorMessages(); track message) {
          <p class="help is-danger">{{ message }}</p>
        }
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
      return `Enter at least ${minError.min} characters!`;
    default:
      return error.kind ?? 'Validation Error';
  }
}
