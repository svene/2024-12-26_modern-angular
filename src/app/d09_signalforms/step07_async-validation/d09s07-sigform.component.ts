import {Component, inject, linkedSignal} from '@angular/core';
import {FlightDetailStore} from './flight-detail.store';
import {Field, form} from '@angular/forms/signals';
import {NgClass} from '@angular/common';
import {flightSchema} from './d09s07-sigform.validation';
import {D09s07ValidationErrorsComponent} from './common/d09s07-validation-errors.component';

@Component({
  selector: 'app-d09s07-sigform',
  templateUrl: 'd09s07-sigform.component.html',
  imports: [
    Field,
    NgClass,
    D09s07ValidationErrorsComponent,
    D09s07ValidationErrorsComponent,
  ]
})
export class D09s07SigformComponent {

  private store = inject(FlightDetailStore);

  flight = linkedSignal(() => this.store.flight());

  flightForm = form(this.flight, flightSchema);
}
