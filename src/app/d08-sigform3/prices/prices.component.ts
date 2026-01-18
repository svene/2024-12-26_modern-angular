import {Component, input} from '@angular/core';
import {ValidationErrorsComponent} from '../common/validation-errors.component';
import {FormField, FieldState, FieldTree} from '@angular/forms/signals';
import {Flight, InitialPrice, Price} from '../flight-detail.model';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  imports: [
    ValidationErrorsComponent,
    FormField
  ]
})
export class PricesComponent {
  flightForm = input.required<FieldTree<Flight>>();

  addPrice(): void {
    this.flightForm().prices().value.update((prices) => [...prices, { ...InitialPrice }]);
  }
}
