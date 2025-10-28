import {Component, inject, linkedSignal} from '@angular/core';
import {FlightDetailStore} from './flight-detail.store';
import {Field, form} from '@angular/forms/signals';
import {NgClass} from '@angular/common';
import {ValidationErrorsComponent} from './common/validation-errors.component';
import {formSchema} from './d08-sigform3.validation';
import {InitialPrice} from './flight-detail.model';
import {FlightComponent} from './flight/flight.component';
import {AircraftComponent} from './aircraft/aircraft.component';

// https://github.com/manfredsteyer/modern/blob/signal-forms-example/src/app/flight-booking/flight-edit/flight-edit.component.ts

@Component({
  selector: 'app-d08-sigform3',
  templateUrl: './d08-sigform3.component.html',
  styleUrls: ['./d08-sigform3.component.scss'],
  imports: [
    ValidationErrorsComponent,
    Field,
    FlightComponent,
    AircraftComponent,
  ]
})
export class D08Sigform3Component {

  private store = inject(FlightDetailStore);

  flight = linkedSignal(() => this.store.flight());

  flightForm = form(this.flight, formSchema);

  addPrice(): void {
    this.flightForm.prices().value.update((prices) => [...prices, { ...InitialPrice }]);
  }}
