import { Routes } from '@angular/router';
import {D01SelectParentComponent} from './d01-select/d01-select-parent.component';
import {D02NameParentComponent} from './d02-name/d02-name-parent.component';

export const routes: Routes = [
  {path: '', redirectTo: 'd01-select', pathMatch: 'full'},
  {path: 'd01-select', component: D01SelectParentComponent},
  {path: 'd02-name', component: D02NameParentComponent},
];
