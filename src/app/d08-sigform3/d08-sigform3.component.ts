import {Component, inject, linkedSignal} from '@angular/core';
import {Flight, FlightDetailStore} from './flight-detail.store';
import {applyWhenValue, customError, disabled, Field, FieldPath, form, min, minLength, required, schema, validate, validateTree} from '@angular/forms/signals';
import {JsonPipe, NgClass} from '@angular/common';
import {ValidationErrorsComponent} from './common/validation-errors.component';
import {formSchema} from './d08-sigform3.validation';

// https://github.com/manfredsteyer/modern/blob/signal-forms-example/src/app/flight-booking/flight-edit/flight-edit.component.ts

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
