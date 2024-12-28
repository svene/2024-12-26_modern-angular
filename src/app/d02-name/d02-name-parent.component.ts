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
    <h2>Demo 02: Name</h2>
    <div>Taken from <a href="https://medium.com/@amosisaila/learn-when-to-use-signal-effects-in-angular-and-why-you-should-avoid-overusing-them-a0d6516032c1" target="_blank">here</a> </div>
    <div>Parent-Name: {{name()}}</div>
    <app-d02-name [name]="name()"></app-d02-name>
    <button (click)="useBart()">Bart</button>
    <button (click)="useJohn()">John</button>
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
