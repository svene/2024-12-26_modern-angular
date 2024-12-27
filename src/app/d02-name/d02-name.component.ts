import {Component, computed, input, signal} from '@angular/core';

/**
 * See https://medium.com/@amosisaila/learn-when-to-use-signal-effects-in-angular-and-why-you-should-avoid-overusing-them-a0d6516032c1
 */
@Component({
  selector: 'app-d02-name',
  imports: [],
  template: `
    <div>Child-Name: {{childName()()}}</div>
    <button (click)="setChildName('Lisa')">Child: Lisa</button>
  `,
})
export class D02NameComponent {
/* Don't do this :
  */

  // Instead do this :
  name = input('');
  childName = computed(() => signal(this.name()));

  setChildName(v: string): void {
    this.childName().set(v);
  }

}
