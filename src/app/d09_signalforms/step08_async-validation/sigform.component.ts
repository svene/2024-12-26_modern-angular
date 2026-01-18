import {Component, inject, linkedSignal} from '@angular/core';
import {FlightDetailStore} from './flight-detail.store';
import {FormField, form} from '@angular/forms/signals';
import {NgClass} from '@angular/common';
import {flightSchema} from './sigform.validation';
import {ValidationErrorsComponent} from './common/validation-errors.component';

@Component({
  selector: 'app-sigform',
  templateUrl: 'sigform.component.html',
  imports: [
    NgClass,
    ValidationErrorsComponent,
    FormField,
  ]
})
export class SigformComponent {

  private store = inject(FlightDetailStore);

  flight = linkedSignal(() => this.store.flight());

  flightForm = form(this.flight, flightSchema);
}
