import {Component, OnDestroy, OnInit, signal} from '@angular/core';
import {D02NameComponent} from './d02-name.component';

/**
 * See https://medium.com/@amosisaila/learn-when-to-use-signal-effects-in-angular-and-why-you-should-avoid-overusing-them-a0d6516032c1
 */
@Component({
  selector: 'app-d02-name-parent',
  imports: [
    D02NameComponent
  ],
  template: `
    <div class="box">
      <h6 class="title is-6">Parent</h6>
      <div class="block">Name: {{name()}}</div>
      <div class="field is-grouped">
        <button class="button is-link" (click)="useBart()">set name to 'Bart'</button>
        <button class="button is-link" (click)="useJohn()">set name to 'John'</button>
      </div>
      <div class="box">
        <app-d02-name [name]="name()"></app-d02-name>
      </div>
    </div>
    <hr>
    <div>Taken from <a href="https://medium.com/@amosisaila/learn-when-to-use-signal-effects-in-angular-and-why-you-should-avoid-overusing-them-a0d6516032c1" target="_blank">here</a> </div>
  `,
})
export class D02NameParentComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
      console.log('D02NameParentComponent: init');
  }
  ngOnDestroy(): void {
    console.log('D02NameParentComponent: destroy');
  }

  name = signal('bla');

  useBart() {
    this.name.set('Bart')
  }
  useJohn() {
    this.name.set('John')
  }
}
