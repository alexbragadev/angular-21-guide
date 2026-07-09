import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'flux-control-component',
  imports: [CardModule, ImageModule, BreadcrumbModule],
  templateUrl: './flux-control.html',
  styleUrl: './flux-control.css',
})
export class FluxControlComponent {

  public items = [
    { label: 'Home', url: '/' },
    { label: 'Flux Control', url: '/flux-control' }
  ];

}
