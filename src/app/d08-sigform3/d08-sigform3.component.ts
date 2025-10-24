import {Component, inject, linkedSignal} from '@angular/core';
import {Flight, FlightDetailStore} from './flight-detail.store';
import {applyWhenValue, Control, customError, FieldPath, form, min, minLength, required, schema, validate} from '@angular/forms/signals';
import {JsonPipe, NgClass} from '@angular/common';
import {ValidationErrorsComponent} from './common/validation-errors.component';

const validateCity = (path: FieldPath<string>, allowed: string[]): void => {
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

export const delayedFlight = schema<Flight>((path) => {
  required(path.delay);
  min(path.delay, 15);
});

export const formSchema = schema<Flight>((path) => {
  required(path.id);
  required(path.from);
  required(path.to);

  minLength(path.from, 3);
  validateCity(path.from, ['Graz', 'Hamburg', 'Zürich']);
  applyWhenValue(path, (flight) => flight.delayed, delayedFlight);
});

@Component({
  selector: 'app-d08-sigform3',
  templateUrl: './d08-sigform3.component.html',
  styleUrls: ['./d08-sigform3.component.scss'],
  imports: [
    Control,
    JsonPipe,
    NgClass,
    ValidationErrorsComponent,
  ]
})
export class D08Sigform3Component {

  private store = inject(FlightDetailStore);

  flight = linkedSignal(() => this.store.flight());

  flightForm = form(this.flight, formSchema);

}
