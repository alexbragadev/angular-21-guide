import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterStateService {
  // Private writable state
  private readonly _count = signal(0);
  private readonly _person_name = signal('Joseph');
  private readonly _country = signal('France');

  public person_information = computed(() => {return `Name: ${this._person_name()}, Country: ${this._country()}`});

  // public readonly
  readonly count = this._count.asReadonly();
  readonly person_name = this._person_name.asReadonly();
  readonly country = this._country.asReadonly();

  increment() {
    this._count.update((v) => v+1);
    console.log('increment', this._count());
  }

  decrement() {
    if (this._count() > 0)
      this._count.update((v) => v -1);
      console.log('decrement', this._count());
  }

  setPersonName(name: string) {
    this._person_name.set(name);
  }

  setCountry(country: string) {
    this._country.set(country);
  }
}
