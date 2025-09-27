import {Component, signal} from '@angular/core';
import {D04NameComponent} from './d04-name.component';

@Component({
  selector: 'app-d04-name-parent',
  imports: [D04NameComponent],
  template: `
    <div class="box">
      <h6 class="title is-6">Parent</h6>
      <div class="block">Name: {{ firstName() }} {{ lastName() }}</div>
      <div class="field is-grouped">
        <button class="button is-link" (click)="setFirstName('Bart')">set firstname to 'Bart'</button>
        <button class="button is-link" (click)="setFirstName('John')">set firstname to 'John'</button>
        <button class="button is-link" (click)="setLastName('Simpson')">set lastname to 'Simpson'</button>
        <button class="button is-link" (click)="setLastName('Johnson')">set lastname to 'Johnson'</button>
      </div>
      <div class="box">
        <app-d04-name [firstName]="firstName()" [lastName]="lastName()"></app-d04-name>
      </div>
    </div>
  `,
})
export class D04NameParentComponent {
  firstName = signal<FirstName>('Bart');
  lastName = signal<LastName>('Simpson');

  setFirstName(v: FirstName) {
    this.firstName.set(v);
  }
  setLastName(v: LastName) {
    this.lastName.set(v);
  }
}
export type FirstName = 'Bart' | 'John';
export type LastName = 'Simpson' | 'Johnson';
