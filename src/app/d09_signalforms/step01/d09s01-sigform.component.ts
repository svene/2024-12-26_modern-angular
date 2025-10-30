import {Component, inject, linkedSignal} from '@angular/core';
import {FlightDetailStore} from './flight-detail.store';
import {Field, form, required} from '@angular/forms/signals';

@Component({
  selector: 'app-d09s01-sigform',
  templateUrl: 'd09s01-sigform.component.html',
  imports: [
    Field
  ]
})
export class D09s01SigformComponent {

  private store = inject(FlightDetailStore);

  flight = linkedSignal(() => this.store.flight());

  flightForm = form(this.flight, (path) => {
    required(path.id)
    required(path.from)
    required(path.to)
  });

}
