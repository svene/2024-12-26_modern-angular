import {Component, computed, input, signal} from '@angular/core';

/**
 * See https://medium.com/@amosisaila/learn-when-to-use-signal-effects-in-angular-and-why-you-should-avoid-overusing-them-a0d6516032c1
 */
@Component({
  selector: 'app-d02-name',
  imports: [],
  template: `
    <h6 class="title is-6">Child</h6>
    <div>Name: {{childName()}}</div>
    <button class="button is-link" (click)="setChildName('Lisa')">set child name to 'Lisa'</button>
  `,
})
export class D02NameComponent {

  // use the following pattern if 'childName' should be changeable both from outside and from inside but
  // a change from inside is not reflected to the outside:
  name = input('');
  childName_ = computed(() => signal(this.name())); // call set() on this to change value from inside. Initial value is take from input
  childName = computed(() => this.childName_()()); // use this for reading in template (bc. double ()() in template is ugly)

  setChildName(v: string): void {
    this.childName_().set(v);
  }

}
