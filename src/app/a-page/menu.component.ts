import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

/**
 * See https://medium.com/@amosisaila/learn-when-to-use-signal-effects-in-angular-and-why-you-should-avoid-overusing-them-a0d6516032c1
 */
@Component({
  selector: 'app-menu',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  template: `
    <!-- See https://bulma.io/documentation/components/menu/ -->
    <aside class="menu">
      <p class="menu-label">Basic Signal Examples</p>
      <ul class="menu-list">
        <a routerLink="/d01-s01-input" routerLinkActive="is-active">Input</a>
        <a routerLink="/d01-select" routerLinkActive="is-active">Select</a>
        <a routerLink="/d02-name" routerLinkActive="is-active">Name</a>
        <a routerLink="/d03-select" routerLinkActive="is-active">Select 2</a>
        <a routerLink="/d04-name" routerLinkActive="is-active">Name 2</a>
      </ul>
      <p class="menu-label">HTTP</p>
      <ul class="menu-list">
        <a routerLink="/d05-http1" routerLinkActive="is-active">HTTP 1</a>
      </ul>
      <p class="menu-label">Signal Forms</p>
      <ul class="menu-list">
        <a routerLink="/d06-sigform1" routerLinkActive="is-active">Simple Validation</a>
        <a routerLink="/d07-sigform2" routerLinkActive="is-active">Multifield Validation</a>
        <a routerLink="/d08-sigform3" routerLinkActive="is-active">Flight Booking</a>
      </ul>
      <p class="menu-label">Signal Forms: Flight</p>
      <ul class="menu-list">
        <a routerLink="/d09s01-sigform" routerLinkActive="is-active">1: Start</a>
        <a routerLink="/d09s02-sigform" routerLinkActive="is-active">2: Validator Functions</a>
        <a routerLink="/d09s03-sigform" routerLinkActive="is-active">3: Show Validation Errors</a>
        <a routerLink="/d09s04-sigform" routerLinkActive="is-active">4: Use Separate Schemas</a>
        <a routerLink="/d09s05-sigform" routerLinkActive="is-active">5: Conditional Validation</a>
        <a routerLink="/d09s06-sigform" routerLinkActive="is-active">6: Multifield Validation</a>
        <a routerLink="/d09s07-sigform" routerLinkActive="is-active">7: Async Validation</a>
        <a routerLink="/d09s08-sigform" routerLinkActive="is-active">8: Async Validation HTTP</a>
        <a routerLink="/d09s09-sigform" routerLinkActive="is-active">9: Nested Forms</a>
        <a routerLink="/d09s10-sigform" routerLinkActive="is-active">10: Nested Forms and Form Arrays</a>
        <a routerLink="/d09s11-sigform" routerLinkActive="is-active">11: Subforms</a>
        <a routerLink="/d09s12-sigform" routerLinkActive="is-active">12: Custom Fields</a>
        <a routerLink="/d10s01-sigform" routerLinkActive="is-active">13: Dynamic Forms</a>
      </ul>
    </aside>
  `,
})
export class MenuComponent {

}
