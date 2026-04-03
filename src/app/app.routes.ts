import { Routes } from '@angular/router';
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
import {D09s10SigformComponent} from './d09_signalforms/step10_nested_forms_and_form_arrays/d09s10-sigform.component';
import {D09s11SigformComponent} from './d09_signalforms/step11_subforms/d09s11-sigform.component';
import {D09s12SigformComponent} from './d09_signalforms/step12_custom-fields/d09s12-sigform.component';
import {D10s01SigformComponent} from './d10_signalforms-dynamic/d10s01-sigform.component';
import {D01S01InputComponent} from './d01-basic/step05/d01s01-input.component';

export const routes: Routes = [
  {path: '', redirectTo: 'd01-s01-input', pathMatch: 'full'},
  {path: 'd01-s01-input', component: D01S01InputComponent},
  {path: 'd01-select', component: D01SelectParentComponent},
  {path: 'd02-name', component: D02NameParentComponent},
  {path: 'd03-select', component: D03SelectParentComponent},
  {path: 'd04-name', component: D04NameParentComponent},

  {path: 'd05-http1', component: D05Http1Component},

  {path: 'd06-sigform1', component: D06Sigform1Component},
  {path: 'd07-sigform2', component: D07Sigform2Component},
  {path: 'd08-sigform3', component: D08Sigform3Component},

  {path: 'd09s01-sigform', component: D09s01SigformComponent},
  {path: 'd09s02-sigform', component: D09s02SigformComponent},
  {path: 'd09s03-sigform', component: D09s03SigformComponent},
  {path: 'd09s04-sigform', component: D09s04SigformComponent},
  {path: 'd09s05-sigform', component: D09s05SigformComponent},
  {path: 'd09s06-sigform', component: D09s06SigformComponent},
  {path: 'd09s07-sigform', component: D09s07SigformComponent},
  {path: 'd09s08-sigform', component: D09s08SigformComponent},
  {path: 'd09s09-sigform', component: D09s09SigformComponent},
  {path: 'd09s10-sigform', component: D09s10SigformComponent},
  {path: 'd09s11-sigform', component: D09s11SigformComponent},
  {path: 'd09s12-sigform', component: D09s12SigformComponent},
  {path: 'd10s01-sigform', component: D10s01SigformComponent},

];
