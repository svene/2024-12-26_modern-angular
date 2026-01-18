import {
  apply,
  applyEach,
  applyWhenValue,
  disabled,
  FormField,
  SchemaPath,
  form,
  min,
  minLength,
  required,
  schema,
  validate,
  validateAsync,
  validateHttp,
  validateTree
} from '@angular/forms/signals';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {rxResource} from '@angular/core/rxjs-interop';
import {Aircraft, Flight, Price} from './flight-detail.model';

const validateCity = (path: SchemaPath<string>, allowed: string[]): void => {
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

export function validateRoundTripTree(schema: SchemaPath<Flight>) {
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

export function validateRoundTrip(schema: SchemaPath<Flight>) {
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

function validateCityHttp(schema: SchemaPath<string>) {
  validateHttp(schema, {
    request: (ctx) => ({
      url: 'https://demo.angulararchitects.io/api/flight',
      params: {
        from: ctx.value(),
      },
    }),
    onSuccess: (result: Flight[], ctx) => {
      if (result.length === 0) {
        return {
          kind: 'airport_not_found_http',
        };
      }
      return null;
    },
    onError: (error: unknown, ctx) => { return null;}
  });
}

function validateDuplicatePrices(prices: SchemaPath<Price[]>) {
  validate(prices, (ctx) => {
    const prices = ctx.value();
    const flightClasses = new Set<string>();

    for (const price of prices) {
      if (flightClasses.has(price.flightClass)) {
        return {
          kind: 'duplicateFlightClass',
          message: 'There can only be one price per flight class',
          flightClass: price.flightClass,
        };
      }
      flightClasses.add(price.flightClass);
    }

    return null;
  });
}

export const delayedFlight = schema<Flight>((path) => {
  required(path.delay);
  min(path.delay, 15);
});

export const aircraftSchema = schema<Aircraft>((path) => {
  required(path.registration);
  required(path.type);
});

export const priceSchema = schema<Price>((path) => {
  required(path.flightClass);
  required(path.amount);
  min(path.amount, 0);
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

  validateCityAsync(path.from);
  validateCityHttp(path.from);

  apply(path.aircraft, aircraftSchema);
  applyEach(path.prices, priceSchema);
  validateDuplicatePrices(path.prices);

});

