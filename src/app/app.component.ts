import {Component, computed, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {D01SelectParentComponent} from './d01-select/d01-select-parent.component';
import {D02NameParentComponent} from './d02-name/d02-name-parent.component';
import {NgClass} from '@angular/common';
import {D03SelectParentComponent} from './d03-select/d03-select-parent.component';
import {BehaviorSubject} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, D01SelectParentComponent, D02NameParentComponent, NgClass, D03SelectParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'modern-angular';
  btnClick$$ = new BehaviorSubject<Demo>('d01-select');
  btnClick = toSignal<Demo>(this.btnClick$$)
  selectedDemo = computed(() => this.btnClick);
}
export type Demo = 'd01-select' | 'd02-name' | 'd03-select';
