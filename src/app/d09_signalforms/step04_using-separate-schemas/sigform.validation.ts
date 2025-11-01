import {Flight} from './flight-detail.store';
import {customError, FieldPath, minLength, required, schema, validate} from '@angular/forms/signals';

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
