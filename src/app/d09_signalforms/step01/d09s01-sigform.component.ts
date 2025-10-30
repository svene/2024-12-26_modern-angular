import {Component, inject, linkedSignal} from '@angular/core';
import {FlightDetailStore} from './flight-detail.store';
import {customError, Field, FieldPath, form, minLength, required, validate} from '@angular/forms/signals';
import {JsonPipe, NgClass} from '@angular/common';

@Component({
  selector: 'app-d09s01-sigform',
  templateUrl: 'd09s01-sigform.component.html',
  imports: [
    Field,
    JsonPipe,
    NgClass
  ]
})
export class D09s01SigformComponent {

  private store = inject(FlightDetailStore);

  flight = linkedSignal(() => this.store.flight());

  validateCity(path: FieldPath<string>, allowed: string[]): void {
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

  flightForm = form(this.flight, (path) => {
    required(path.id, { message: 'Please enter a value!' });
    required(path.from, { message: 'Please enter a value!' });
    required(path.to, { message: 'Please enter a value!' });

    minLength(path.from, 3);

    const allowed = ['Graz', 'Hamburg', 'Zürich'];
    this.validateCity(path.from, allowed);
  });

}
