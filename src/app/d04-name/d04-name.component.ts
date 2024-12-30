import {Component, input, linkedSignal} from '@angular/core';

@Component({
  selector: 'app-d04-name',
  imports: [],
  template: `
    <h6 class="title is-6">Child</h6>
    <div>Name: {{childName()}}</div>
  `,
})
export class D04NameComponent {

  // use the following pattern if 'childName' depends on two incoming signals:
  firstName = input.required<string>();
  lastName = input.required<string>();

  // see https://stackoverflow.com/questions/79270922/angular-linked-signal-dependent-on-two-other-signals
  childName = linkedSignal<NameInput, string>({
    source: () => ({
      firstName: this.firstName(),
      lastName: this.lastName()
    }),
    computation: (param: NameInput) => {
      return `${param.firstName} ${param.lastName}`;
    }
  });

}
export interface NameInput {
  firstName: string;
  lastName: string;
}

