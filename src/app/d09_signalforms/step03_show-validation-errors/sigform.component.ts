import {Component, inject, linkedSignal} from '@angular/core';
import {FlightDetailStore} from './flight-detail.store';
import {customError, Field, FieldPath, form, minLength, required, validate} from '@angular/forms/signals';
import {NgClass} from '@angular/common';
import {ValidationErrorsComponent} from './common/validation-errors.component';

@Component({
  selector: 'app-sigform',
  templateUrl: 'sigform.component.html',
  imports: [
    Field,
    NgClass,
    ValidationErrorsComponent
  ]
})
export class SigformComponent {

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
