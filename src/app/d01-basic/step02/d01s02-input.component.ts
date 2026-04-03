import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {D01s02Banner1} from './d01-s02-banner1.component';
import {D01s02Banner2} from './d01-s02-banner2.component';

@Component({
  selector: 'app-d01-s02-input',
  imports: [
    FormsModule,
    D01s02Banner1,
    D01s02Banner2
  ],
  template: `
    <div class="level">
      <input
        class="input level-left"
        [ngModel]="inputvalue1"
        (ngModelChange)="inputvalue1 = $event"
      >
      <button class="button level-right" (click)="inputvalue1 = 'button-value 1'">Set value</button>
    </div>

    <pre class="mt-3">
      Two-way binding with ngModel
      using [ngModel] and (ngModelChange)

      value: {{ inputvalue1 }}

      &lt;input [ngModel]="inputvalue1" (ngModelChange)="inputvalue1 = $event"&gt;

      https://www.youtube.com/watch?v=0b43U-l3yGA
    </pre>

    <hr>

    <div class="level">
      <input
        class="input level-left"
        [(ngModel)]="inputvalue2"
      >
      <button class="button level-right" (click)="inputvalue2 = 'button-value 2'">Set value</button>
    </div>

    <pre class="mt-3">
      Two-way binding with ngModel
      using [ngModel] and (ngModelChange)

      value: {{ inputvalue2 }}

      &lt;input [(ngModel)]="inputvalue2"&gt;
    </pre>

    <hr>
    <button class="button" (click)="showMore1 = !showMore1">
      {{ showMore1 ? 'Collapse' : 'Expand' }} Banner (parent component)
    </button>

    <app-d01-s02-banner1 [(expand)]="showMore1"></app-d01-s02-banner1>

    <hr>
    <button class="button" (click)="showMore2.set(!showMore2())">
      {{ showMore2() ? 'Collapse' : 'Expand' }} Banner (parent component)
    </button>

    <app-d01-s02-banner2 [(expand)]="showMore2"></app-d01-s02-banner2>

  `,
})
export class D01s02InputComponent {
  inputvalue1 = '';
  inputvalue2 = '';

  showMore1 = false;
  showMore2 = signal(false);


}
