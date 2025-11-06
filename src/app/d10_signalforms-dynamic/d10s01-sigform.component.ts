import {Component, inject, linkedSignal, WritableSignal} from '@angular/core';
import {form} from '@angular/forms/signals';
import {FieldDef, toSchema} from './model';
import {DynamicFormComponent} from './dynamic-form.component';
import {FlightDetailStore} from '../d09_signalforms/step01/flight-detail.store';

@Component({
  selector: 'app-d10s01-sigform',
  template: `
    D10
    <form>
      <app-dynamic-form [metaInfo]="meta" [dynamicForm]="dynamicForm"></app-dynamic-form>
    </form>
  `,
  imports: [
    DynamicFormComponent
  ]
})
export class D10s01SigformComponent {

  meta: FieldDef[] = [
    { name: 'id', label: 'Id', required: true },
    {
      name: 'from',
      label: 'From',
      required: true,
      minLength: 3,
      maxLength: 20,
    },
    { name: 'to', label: 'To', required: true, minLength: 3, maxLength: 20 },
    { name: 'delayed', label: 'Delayed', type: 'checkbox' },
  ];

  private store = inject(FlightDetailStore);
  flight = linkedSignal(() => this.store.flight());

  // Let's assume we don't know the structure of the entity
  // upfront but we have matching meta data:
  entity = this.flight as WritableSignal<unknown>;
  dynamicForm = form(this.entity, toSchema(this.meta));
}
