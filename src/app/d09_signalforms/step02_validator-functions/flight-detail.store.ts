import {Injectable, signal} from '@angular/core';

export type Flight = {
  id: number;
  from: string;
  to: string;
}

const InitialFlight: Flight = {id: 1, from: 'Basel', to: 'Wien'};

@Injectable({providedIn: 'root'})
export class FlightDetailStore {

  flight = signal(InitialFlight);

}
