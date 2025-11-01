import {Component, inject, linkedSignal} from '@angular/core';
import {FlightDetailStore} from './flight-detail.store';
import {Field, form} from '@angular/forms/signals';
import {NgClass} from '@angular/common';
import {flightSchema} from './d09s09-sigform.validation';
import {D09s09ValidationErrorsComponent} from './common/d09s09-validation-errors.component';

@Component({
  selector: 'app-d09s09-sigform',
  templateUrl: 'd09s09-sigform.component.html',
  imports: [
    Field,
    NgClass,
    D09s09ValidationErrorsComponent,
  ]
})
export class D09s09SigformComponent {

  private store = inject(FlightDetailStore);

  flight = linkedSignal(() => this.store.flight());

  flightForm = form(this.flight, flightSchema);
}
