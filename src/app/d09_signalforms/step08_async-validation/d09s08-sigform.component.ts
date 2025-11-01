import {Component, inject, linkedSignal} from '@angular/core';
import {FlightDetailStore} from './flight-detail.store';
import {Field, form} from '@angular/forms/signals';
import {NgClass} from '@angular/common';
import {flightSchema} from './d09s08-sigform.validation';
import {D09s08ValidationErrorsComponent} from './common/d09s08-validation-errors.component';

@Component({
  selector: 'app-d09s08-sigform',
  templateUrl: 'd09s08-sigform.component.html',
  imports: [
    Field,
    NgClass,
    D09s08ValidationErrorsComponent,
    D09s08ValidationErrorsComponent,
  ]
})
export class D09s08SigformComponent {

  private store = inject(FlightDetailStore);

  flight = linkedSignal(() => this.store.flight());

  flightForm = form(this.flight, flightSchema);
}
