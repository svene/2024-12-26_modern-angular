import {Component, inject, linkedSignal} from '@angular/core';
import {FlightDetailStore} from './flight-detail.store';
import {FormField, SchemaPath, form, minLength, required, validate} from '@angular/forms/signals';
import {JsonPipe, NgClass} from '@angular/common';

@Component({
  selector: 'app-sigform',
  templateUrl: 'sigform.component.html',
  imports: [
    FormField,
    JsonPipe,
    NgClass
  ]
})
export class SigformComponent {

  private store = inject(FlightDetailStore);

  flight = linkedSignal(() => this.store.flight());

  validateCity(path: SchemaPath<string>, allowed: string[]): void {
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

  flightForm = form(this.flight, (path) => {
    required(path.id, { message: 'Please enter a value!' });
    required(path.from, { message: 'Please enter a value!' });
    required(path.to, { message: 'Please enter a value!' });

    minLength(path.from, 3);

    const allowed = ['Graz', 'Hamburg', 'Zürich'];
    this.validateCity(path.from, allowed);
  });

}
