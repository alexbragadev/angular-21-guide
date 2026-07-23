import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CounterStateService } from '../../services/counter-state';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-signals',
  imports: [BreadcrumbModule, CommonModule, ButtonModule, FormsModule, InputTextModule, FloatLabelModule],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class SignalsComponent implements OnInit {
  state = inject(CounterStateService);

  count = this.state.count;
  name = '';
  country = '';

  public items = [
    { label: 'Home', url: './', target: '_self' },
    { label: 'Signals', url: './signals', target: '_self' }
  ];

  ngOnInit(): void {

  }

  sendPersonalInfo() {
    this.state.setPersonName(this.name);
    this.state.setCountry(this.country);
  }
}
