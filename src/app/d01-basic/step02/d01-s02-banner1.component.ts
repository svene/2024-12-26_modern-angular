import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-d01-s02-banner',
  imports: [
    FormsModule
  ],
  template: `
    <h3 class="is-size-3">Banner</h3>
    <button class="button" (click)="expandChange.emit(!expand)">
      {{expand ? 'Less Info' : 'More Info' }}
    </button>
    @if (expand) {
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
    }
  `,
})
export class D01s02Banner1 {
  @Input()
  expand = false;

  @Output()
  expandChange = new EventEmitter<boolean>();
}
