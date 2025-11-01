import {Injectable, signal} from '@angular/core';

export type Flight = {
  id: number;
  from: string;
  to: string;
  delay: number;
  delayed: boolean;
}

const InitialFlight: Flight = {id: 1, from: 'Basel', to: 'Wien', delay: 0, delayed: false};

@Injectable({providedIn: 'root'})
export class FlightDetailStore {

  flight = signal(InitialFlight);

}
