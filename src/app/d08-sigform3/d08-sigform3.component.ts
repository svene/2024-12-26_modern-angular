import {Component, inject, linkedSignal} from '@angular/core';
import {Flight, FlightDetailStore} from './flight-detail.store';
import {applyWhenValue, customError, disabled, Field, FieldPath, form, min, minLength, required, schema, validate, validateTree} from '@angular/forms/signals';
import {JsonPipe, NgClass} from '@angular/common';
import {ValidationErrorsComponent} from './common/validation-errors.component';

// https://github.com/manfredsteyer/modern/blob/signal-forms-example/src/app/flight-booking/flight-edit/flight-edit.component.ts

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

function validateRoundTripTree(schema: FieldPath<Flight>) {
  validateTree(schema, (ctx) => {
    const from = ctx.field.from().value();
    const to = ctx.field.to().value();

    if (from === to) {
      return {
        kind: 'roundtrip_tree',
        field: ctx.field.from,
        from,
        to,
      };
    }
    return null;
  });
}

function validateRoundTrip(schema: FieldPath<Flight>) {
  validate(schema, (ctx) => {
    const from = ctx.field.from().value();
    const to = ctx.field.to().value();

    if (from === to) {
      return customError({
        kind: 'roundtrip',
        target: ctx.field.from,
        from,
        to,
      });
    }
    return null;
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

  disabled(path.delay, (ctx) => !ctx.valueOf(path.delayed));
  applyWhenValue(path, (flight) => flight.delayed, delayedFlight);

  validateRoundTrip(path);
  validateRoundTripTree(path);

});

@Component({
  selector: 'app-d08-sigform3',
  templateUrl: './d08-sigform3.component.html',
  styleUrls: ['./d08-sigform3.component.scss'],
  imports: [
    JsonPipe,
    NgClass,
    ValidationErrorsComponent,
    Field,
  ]
})
export class D08Sigform3Component {

  private store = inject(FlightDetailStore);

  flight = linkedSignal(() => this.store.flight());

  flightForm = form(this.flight, formSchema);

}
