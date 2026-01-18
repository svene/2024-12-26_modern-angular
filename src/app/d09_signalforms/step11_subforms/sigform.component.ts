import {Component, inject, linkedSignal} from '@angular/core';
import {FlightDetailStore} from './flight-detail.store';
import {FormField, form} from '@angular/forms/signals';
import {flightSchema} from './sigform.validation';
import {ValidationErrorsComponent} from './common/validation-errors.component';
import {InitialPrice} from './flight-detail.model';
import {FlightComponent} from './flight/flight.component';
import {AircraftComponent} from './aircraft/aircraft.component';
import {PricesComponent} from './prices/prices.component';

@Component({
  selector: 'app-sigform',
  templateUrl: 'sigform.component.html',
  imports: [
    ValidationErrorsComponent,
    ValidationErrorsComponent,
    FlightComponent,
    AircraftComponent,
    PricesComponent,
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
