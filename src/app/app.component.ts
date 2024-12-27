import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {D01SelectParentComponent} from './d01-select/d01-select-parent.component';
import {D02NameParentComponent} from './d02-name/d02-name-parent.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, D01SelectParentComponent, D02NameParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'modern-angular';
}
