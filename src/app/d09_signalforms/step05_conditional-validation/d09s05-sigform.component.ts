import {Component, inject, linkedSignal} from '@angular/core';
import {FlightDetailStore} from './flight-detail.store';
import {Field, form} from '@angular/forms/signals';
import {NgClass} from '@angular/common';
import {flightSchema} from './d09s05-sigform.validation';
import {D09S05ValidationErrorsComponent} from './common/d09s05-validation-errors.component';

@Component({
  selector: 'app-d09s05-sigform',
  templateUrl: 'd09s05-sigform.component.html',
  imports: [
    Field,
    NgClass,
    D09S05ValidationErrorsComponent,
    D09S05ValidationErrorsComponent,
  ]
})
export class D09s05SigformComponent {

  private store = inject(FlightDetailStore);

  flight = linkedSignal(() => this.store.flight());

  flightForm = form(this.flight, flightSchema);
}
