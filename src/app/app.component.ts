import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {D01SelectParentComponent} from './d01-select/d01-select-parent.component';
import {D02NameParentComponent} from './d02-name/d02-name-parent.component';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, D01SelectParentComponent, D02NameParentComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'modern-angular';
  selectedDemo = signal<Demo>('select');

  onClick(demo: Demo) {
    this.selectedDemo.set(demo);
  }
}
export type Demo = 'select' | 'name';
