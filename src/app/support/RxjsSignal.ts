import {BehaviorSubject} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import {Signal} from '@angular/core';

export class RxjsSignal<T> {
  constructor(initialValue: T) {
    this.subject = new BehaviorSubject(initialValue);
    this.signal = toSignal<T>(this.subject);
  }
  subject: BehaviorSubject<T>;
  signal: Signal<T | undefined>;
}
