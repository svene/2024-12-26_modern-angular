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
      <p class="menu-label">Signals</p>
      <ul class="menu-list">
        <a routerLink="/d01-select" routerLinkActive="is-active">Select</a>
        <a routerLink="/d02-name" routerLinkActive="is-active">Name</a>
<!--
        <li (click)="selectDemo('d01-select')"><a [ngClass]="{'is-active': selection() === 'd01-select'}">Select</a></li>
        <li (click)="selectDemo('d02-name')"><a [ngClass]="{'is-active': selection() === 'd02-name'}">Name</a></li>
        <li (click)="selectDemo('d03-select')"><a [ngClass]="{'is-active': selection() === 'd03-select'}">Select 2</a></li>
        <li (click)="selectDemo('d04-name')"><a [ngClass]="{'is-active': selection() === 'd04-name'}">Name 2</a></li>
-->
      </ul>
      <p class="menu-label">HTTP</p>
      <ul class="menu-list">
<!--        <li (click)="selectDemo('d05-http1')"><a [ngClass]="{'is-active': selection() === 'd05-http1'}">HTTP 1</a></li>-->
      </ul>
      <p class="menu-label">Signal Forms</p>
      <ul class="menu-list">
<!--
        <li (click)="selectDemo('d06-sigform1')"><a [ngClass]="{'is-active': selection() === 'd06-sigform1'}">Simple Validation</a></li>
        <li (click)="selectDemo('d07-sigform2')"><a [ngClass]="{'is-active': selection() === 'd07-sigform2'}">Multifield Validation</a></li>
        <li (click)="selectDemo('d08-sigform3')"><a [ngClass]="{'is-active': selection() === 'd08-sigform3'}">Flight Booking</a></li>
-->
      </ul>
      <p class="menu-label">Signal Forms: Flight</p>
      <ul class="menu-list">
<!--
        <li (click)="selectDemo('d09s01-sigform')"><a [ngClass]="{'is-active': selection() === 'd09s01-sigform'}">1: Start</a></li>
        <li (click)="selectDemo('d09s02-sigform')"><a [ngClass]="{'is-active': selection() === 'd09s02-sigform'}">2: Validator Functions</a></li>
        <li (click)="selectDemo('d09s03-sigform')"><a [ngClass]="{'is-active': selection() === 'd09s03-sigform'}">3: Show Validation Errors</a></li>
        <li (click)="selectDemo('d09s04-sigform')"><a [ngClass]="{'is-active': selection() === 'd09s04-sigform'}">4: Use Separate Schemas</a></li>
        <li (click)="selectDemo('d09s05-sigform')"><a [ngClass]="{'is-active': selection() === 'd09s05-sigform'}">5: Conditional Validation</a></li>
        <li (click)="selectDemo('d09s06-sigform')"><a [ngClass]="{'is-active': selection() === 'd09s06-sigform'}">6: Multifield Validation</a></li>
        <li (click)="selectDemo('d09s07-sigform')"><a [ngClass]="{'is-active': selection() === 'd09s07-sigform'}">7: Async Validation</a></li>
        <li (click)="selectDemo('d09s08-sigform')"><a [ngClass]="{'is-active': selection() === 'd09s08-sigform'}">8: Async Validation HTTP</a></li>
        <li (click)="selectDemo('d09s09-sigform')"><a [ngClass]="{'is-active': selection() === 'd09s09-sigform'}">9: Nested Forms</a></li>
        <li (click)="selectDemo('d09s10-sigform')"><a [ngClass]="{'is-active': selection() === 'd09s10-sigform'}">10: Nested Forms and Form Arrays</a></li>
        <li (click)="selectDemo('d09s11-sigform')"><a [ngClass]="{'is-active': selection() === 'd09s11-sigform'}">11: Subforms</a></li>
        <li (click)="selectDemo('d09s12-sigform')"><a [ngClass]="{'is-active': selection() === 'd09s12-sigform'}">12: Custom Fields</a></li>
        <li (click)="selectDemo('d10s01-sigform')"><a [ngClass]="{'is-active': selection() === 'd10s01-sigform'}">13: Dynamic Forms</a></li>
-->
      </ul>
    </aside>
  `,
})
export class MenuComponent {

}
