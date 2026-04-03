import {Component, signal} from '@angular/core';
import {MenuComponent} from './a-page/menu.component';
import {HeadingComponent} from './a-page/heading.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    MenuComponent,
    HeadingComponent,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'modern-angular';
  selection = signal<Demo>('d09s01-sigform');

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
  | 'd09s10-sigform'
  | 'd09s11-sigform'
  | 'd09s12-sigform'
  | 'd10s01-sigform'
  ;
