import {Component, input} from '@angular/core';
import {ValidationErrorsComponent} from '../common/validation-errors.component';
import {NgClass} from '@angular/common';
import {Field, FieldTree} from '@angular/forms/signals';
import {Flight} from '../flight-detail.model';
import {DelayStepperComponent} from '../delay-stepper.component';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  imports: [
    ValidationErrorsComponent,
    NgClass,
    Field,
    DelayStepperComponent
  ]
})
export class FlightComponent {
  flightForm = input.required<FieldTree<Flight>>();
}
