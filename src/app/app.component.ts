import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgClass} from '@angular/common';
import {D01SelectParentComponent} from './d01-select/d01-select-parent.component';
import {D02NameParentComponent} from './d02-name/d02-name-parent.component';
import {D03SelectParentComponent} from './d03-select/d03-select-parent.component';
import {D04NameParentComponent} from './d04-name/d04-name-parent.component';
import {D05Http1Component} from './d05-http1/d05-http1.component';
import {D06Sigform1Component} from './d06-sigform1/d06-sigform1.component';
import {D07Sigform2Component} from './d07-sigform2/d07-sigform2.component';
import {D08Sigform3Component} from './d08-sigform3/d08-sigform3.component';
import {D09s01SigformComponent} from './d09_signalforms/step01/d09s01-sigform.component';
import {D09s02SigformComponent} from './d09_signalforms/step02_validator-functions/d09s02-sigform.component';
import {D09s03SigformComponent} from './d09_signalforms/step03_show-validation-errors/d09s03-sigform.component';
import {D09s04SigformComponent} from './d09_signalforms/step04_using-separate-schemas/d09s04-sigform.component';
import {D09s05SigformComponent} from './d09_signalforms/step05_conditional-validation/d09s05-sigform.component';
import {D09s06SigformComponent} from './d09_signalforms/step06_multifield-validation/d09s06-sigform.component';
import {D09s07SigformComponent} from './d09_signalforms/step07_async-validation/d09s07-sigform.component';
import {D09s08SigformComponent} from './d09_signalforms/step08_async-validation/d09s08-sigform.component';
import {D09s09SigformComponent} from './d09_signalforms/step09_nested-forms_aircraft-and-registration/d09s09-sigform.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgClass,
    D01SelectParentComponent,
    D02NameParentComponent,
    D03SelectParentComponent,
    D04NameParentComponent,
    D05Http1Component,
    D06Sigform1Component,
    D07Sigform2Component,
    D08Sigform3Component,
    D09s01SigformComponent,
    D09s02SigformComponent,
    D09s03SigformComponent,
    D09s04SigformComponent,
    D09s05SigformComponent,
    D09s06SigformComponent,
    D09s07SigformComponent,
    D09s08SigformComponent,
    D09s09SigformComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'modern-angular';
  selection = signal<Demo>('d09s09-sigform');

  selectDemo(v: Demo) {
    this.selection.set(v);
  }
}

export type Demo =
  'd01-select'
  | 'd02-name'
  | 'd03-select'
  | 'd04-name'
  | 'd05-http1'
  | 'd06-sigform1'
  | 'd07-sigform2'
  | 'd08-sigform3'
  | 'd09s01-sigform'
  | 'd09s02-sigform'
  | 'd09s03-sigform'
  | 'd09s04-sigform'
  | 'd09s05-sigform'
  | 'd09s06-sigform'
  | 'd09s07-sigform'
  | 'd09s08-sigform'
  | 'd09s09-sigform'
  ;
