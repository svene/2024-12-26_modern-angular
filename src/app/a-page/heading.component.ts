import {Component} from '@angular/core';

/**
 * See https://medium.com/@amosisaila/learn-when-to-use-signal-effects-in-angular-and-why-you-should-avoid-overusing-them-a0d6516032c1
 */
@Component({
  selector: 'app-heading',
  imports: [
  ],
  template: `
    <section class="section">
      <div class="container">
        <h1 class="title">
          Modern Angular
        </h1>
        <p class="subtitle">
          Angular Demos with modern features
        </p>
      </div>
    </section>
  `,
})
export class HeadingComponent {
}
