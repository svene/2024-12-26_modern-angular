import {Component, effect, input, model} from '@angular/core';
import {FormValueControl, ValidationError, WithOptionalField} from '@angular/forms/signals';

@Component({
  selector: 'app-delay-stepper',
  template: `
    @if(disabled()) {
      <div class="delay">No Delay!</div>
    } @else {
      <div class="delay">{{ value() }} Minutes</div>
      <div>
        <a (click)="inc()">+15 Minutes</a> |
        <a (click)="dec()">-15 Minutes</a>
      </div>
    }
  `,
  imports: [
  ]
})
export class DelayStepperComponent implements FormValueControl<number> {
  value = model(0);

  disabled = input(false);
  errors = input<readonly WithOptionalField<ValidationError>[]>([]);

  constructor() {
    effect(() => {
      console.log('DelayStepperComponent, errors', this.errors());
    });
  }

  inc(): void {
    this.value.update((v) => v + 15);
  }

  dec(): void {
    this.value.update((v) => Math.max(v - 15, 0));
  }
}
