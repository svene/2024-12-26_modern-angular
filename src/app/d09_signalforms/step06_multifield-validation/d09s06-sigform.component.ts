import {Component, inject, linkedSignal} from '@angular/core';
import {FlightDetailStore} from './flight-detail.store';
import {Field, form} from '@angular/forms/signals';
import {NgClass} from '@angular/common';
import {flightSchema} from './d09s06-sigform.validation';
import {D09s06ValidationErrorsComponent} from './common/d09s06-validation-errors.component';

@Component({
  selector: 'app-d09s06-sigform',
  templateUrl: 'd09s06-sigform.component.html',
  imports: [
    Field,
    NgClass,
    D09s06ValidationErrorsComponent,
    D09s06ValidationErrorsComponent,
  ]
})
export class D09s06SigformComponent {

  private store = inject(FlightDetailStore);

  flight = linkedSignal(() => this.store.flight());

  flightForm = form(this.flight, flightSchema);
}
