import {Component, input} from '@angular/core';
import {ValidationErrorsComponent} from '../common/validation-errors.component';
import {NgClass} from '@angular/common';
import {Field, FieldTree} from '@angular/forms/signals';
import {Aircraft} from '../flight-detail.model';

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  imports: [
    ValidationErrorsComponent,
    NgClass,
    Field
  ]
})
export class AircraftComponent {
  aircraftForm = input.required<FieldTree<Aircraft>>();
}
