import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterStateService {
  // Private writable state
  private readonly _count = signal(0);
  private readonly _person_name = signal('Joseph');
  private readonly _country = signal('France');
  private readonly _enviarAlerta = signal(false);

  notas = signal<number[]>([]);

  // public readonly
  readonly count = this._count.asReadonly();
  readonly person_name = this._person_name.asReadonly();
  readonly country = this._country.asReadonly();
  readonly enviarAlerta = this._enviarAlerta.asReadonly();

  person_information = computed(() => {return `Name: ${this._person_name()}, Country: ${this._country()}`});
  media = computed(() => {
    const notas = this.notas();
    if (notas.length === 0) {
      return 0;
    }
    const sum = notas.reduce((acc, nota) => acc + nota, 0);
    return sum / notas.length;
  });

  constructor() {
    effect(() => {
      if(this.media() < 6){
        this._enviarAlerta.update(() => true);
      } else {
        this._enviarAlerta.update(() => false);
      }
    });
  }

  adicionarNota(nota: number) {
    this.notas.update(lista => [...lista, nota]);
  }

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
