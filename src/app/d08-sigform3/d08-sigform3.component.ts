import {Component, inject, linkedSignal} from '@angular/core';
import {FlightDetailStore} from './flight-detail.store';
import {Control, customError, form, minLength, required, validate} from '@angular/forms/signals';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-d08-sigform3',
  templateUrl: './d08-sigform3.component.html',
  styleUrls: ['./d08-sigform3.component.scss'],
  imports: [
    Control,
    JsonPipe,
  ]
})
export class D08Sigform3Component {

  private store = inject(FlightDetailStore);

  flight = linkedSignal(() => this.store.flight());

  flightForm = form(this.flight, (path) => {
    required(path.id, { message: 'Please enter a value!' });
    required(path.from, { message: 'Please enter a value!' });
    required(path.to, { message: 'Please enter a value!' });

    minLength(path.from, 3);

    const allowed = ['Graz', 'Hamburg', 'Zürich'];
    validate(path.from, (ctx) => {
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
  });


}
