import {Component, inject, linkedSignal} from '@angular/core';
import {FlightDetailStore} from './flight-detail.store';
import {Control, form, required} from '@angular/forms/signals';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-d08-sigform3',
  templateUrl: './d08-sigform3.component.html',
  styleUrls: ['./d08-sigform3.component.scss'],
  imports: [
    Control,
    JsonPipe
  ]
})
export class D08Sigform3Component {

  private store = inject(FlightDetailStore);

  flight = linkedSignal(() => this.store.flight());

  flightForm = form(this.flight, (path) => {
    required(path.id)
    required(path.from)
    required(path.to)
  });

}
