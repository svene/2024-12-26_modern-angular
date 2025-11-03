import {Component, inject, linkedSignal} from '@angular/core';
import {FlightDetailStore} from './flight-detail.store';
import {Field, form} from '@angular/forms/signals';
import {NgClass} from '@angular/common';
import {flightSchema} from './sigform.validation';
import {ValidationErrorsComponent} from './common/validation-errors.component';
import {InitialPrice} from './flight-detail.model';

@Component({
  selector: 'app-sigform',
  templateUrl: 'sigform.component.html',
  imports: [
    Field,
    NgClass,
    ValidationErrorsComponent,
    ValidationErrorsComponent,
  ]
})
export class SigformComponent {

  private store = inject(FlightDetailStore);

  flight = linkedSignal(() => this.store.flight());

  flightForm = form(this.flight, flightSchema);


  addPrice(): void {
    this.flightForm.prices().value.update((prices) => [...prices, { ...InitialPrice }]);
  }

}
