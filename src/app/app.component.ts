import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgClass} from '@angular/common';
import {D01SelectParentComponent} from './d01-select/d01-select-parent.component';
import {D02NameParentComponent} from './d02-name/d02-name-parent.component';
import {D03SelectParentComponent} from './d03-select/d03-select-parent.component';
import {D04NameParentComponent} from './d04-name/d04-name-parent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass, D01SelectParentComponent, D02NameParentComponent, D03SelectParentComponent, D04NameParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'modern-angular';
  selection = signal<Demo>('d01-select');

  selectDemo(v: Demo) {
    this.selection.set(v);
  }
}
export type Demo = 'd01-select' | 'd02-name' | 'd03-select' | 'd04-name' ;
