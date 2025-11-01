import {Injectable, signal} from '@angular/core';
import {Flight} from './flight-detail.model';

const InitialFlight: Flight = {
  id: 1,
  from: 'Basel',
  to: 'Wien',
  delay: 0,
  delayed: false,
  aircraft: {type: '', registration: ''},
  prices: []
};

@Injectable({providedIn: 'root'})
export class FlightDetailStore {

  flight = signal(InitialFlight);

}
