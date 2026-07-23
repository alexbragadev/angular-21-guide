import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-signals',
  imports: [BreadcrumbModule, CommonModule],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class SignalsComponent {
  public items = [
    { label: 'Home', url: './', target: '_self' },
    { label: 'Signals', url: './signals', target: '_self' }
  ];
}
