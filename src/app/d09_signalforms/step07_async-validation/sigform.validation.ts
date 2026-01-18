import {Flight} from './flight-detail.store';
import {applyWhenValue, disabled, SchemaPath, min, minLength, required, schema, validate, validateAsync, validateTree} from '@angular/forms/signals';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {rxResource} from '@angular/core/rxjs-interop';

export const validateCity = (path: SchemaPath<string>, allowed: string[]): void => {
  validate(path, (ctx) => {
  const value = ctx.value();
  if (allowed.includes(value)) {
    return null;
  }

  return {
    kind: 'city',
    value,
    allowed,
  };
});
}

export const delayedFlight = schema<Flight>((path) => {
  required(path.delay);
  min(path.delay, 15);
});

function validateRoundTripTree(schema: SchemaPath<Flight>) {
  validateTree(schema, (ctx) => {
    const from = ctx.fieldTree.from().value();
    const to = ctx.fieldTree.to().value();

    if (from === to) {
      return {
        kind: 'roundtrip_tree',
        field: ctx.fieldTree.from,
        from,
        to,
      };
    }
    return null;
  });
}

function validateRoundTrip(schema: SchemaPath<Flight>) {
  validate(schema, (ctx) => {
    const from = ctx.fieldTree.from().value();
    const to = ctx.fieldTree.to().value();

    if (from === to) {
      return {
        kind: 'roundtrip',
        target: ctx.fieldTree.from,
        from,
        to,
      };
    }
    return null;
  });
}

// ----- async  validation -----
// Simulates a server-side validation
function rxValidateAirport(airport: string): Observable<boolean> {
  return of(null).pipe(
    delay(2000),
    map(() => airport !== 'Graz')
  );
}
function validateCityAsync(schema: SchemaPath<string>) {
  validateAsync(schema, {
    params: (ctx) => ({
      value: ctx.value(),
    }),
    factory: (params) => {
      return rxResource({
        params,
        stream: (p) => {
          return rxValidateAirport(p.params.value);
        },
      });
    },
    onSuccess: (result, ctx) => {
      if (!result) {
        return {
          kind: 'airport_closed',
        };
      }
      return null;
    },
    onError: (error: unknown, ctx) => { return null;}
  });
}

export const flightSchema = schema<Flight>((path) => {
  required(path.id, { message: 'Please enter a value!' });
  required(path.from, { message: 'Please enter a value!' });
  required(path.to, { message: 'Please enter a value!' });

  minLength(path.from, 3);

  const allowed = ['Graz', 'Hamburg', 'Zürich'];
  validateCity(path.from, allowed);

  disabled(path.delay, (ctx) => !ctx.valueOf(path.delayed));
  applyWhenValue(path, (flight) => flight.delayed, delayedFlight);

  validateRoundTrip(path);
  validateRoundTripTree(path);

  validateCityAsync(path.from);
});
