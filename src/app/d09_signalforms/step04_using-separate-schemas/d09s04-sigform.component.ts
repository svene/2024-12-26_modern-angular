import {Component, inject, linkedSignal} from '@angular/core';
import {FlightDetailStore} from './flight-detail.store';
import {Field, form} from '@angular/forms/signals';
import {NgClass} from '@angular/common';
import {ValidationErrorsComponent} from './common/validation-errors.component';
import {flightSchema} from './d09s04-sigform.validation';

@Component({
  selector: 'app-d09s04-sigform',
  templateUrl: 'd09s04-sigform.component.html',
  imports: [
    Field,
    NgClass,
    ValidationErrorsComponent
  ]
})
export class D09s04SigformComponent {

  private store = inject(FlightDetailStore);

  flight = linkedSignal(() => this.store.flight());

  flightForm = form(this.flight, flightSchema);

}
