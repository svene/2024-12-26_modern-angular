import {Component, inject, linkedSignal} from '@angular/core';
import {Flight, FlightDetailStore} from './flight-detail.store';
import {customError, Field, FieldPath, form, minLength, required, schema, validate} from '@angular/forms/signals';
import {JsonPipe, NgClass} from '@angular/common';
import {ValidationErrorsComponent} from './common/validation-errors.component';

export const validateCity = (path: FieldPath<string>, allowed: string[]): void => {
  validate(path, (ctx) => {
  const value = ctx.value();
  if (allowed.includes(value)) {
    return null;
  }

  return customError({
    kind: 'city',
    value,
    allowed,
  });
});
}


export const flightSchema = schema<Flight>((path) => {
  required(path.id, { message: 'Please enter a value!' });
  required(path.from, { message: 'Please enter a value!' });
  required(path.to, { message: 'Please enter a value!' });

  minLength(path.from, 3);

  const allowed = ['Graz', 'Hamburg', 'Zürich'];
  validateCity(path.from, allowed);
});

@Component({
  selector: 'app-d09s04-sigform',
  templateUrl: 'd09s04-sigform.component.html',
  imports: [
    Field,
    NgClass,
    ValidationErrorsComponent
  ]
})
export class D09s04SigformComponent {

  private store = inject(FlightDetailStore);

  flight = linkedSignal(() => this.store.flight());

  flightForm = form(this.flight, flightSchema);
}
