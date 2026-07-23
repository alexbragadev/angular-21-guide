import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { ImageModule } from 'primeng/image';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'flux-control-component',
  imports: [CardModule, ImageModule, PanelModule, BreadcrumbModule, CommonModule],
  templateUrl: './flux-control.html',
  styleUrl: './flux-control.css',
})
export class FluxControlComponent {

  public items = [
    { label: 'Home', url: './', target: '_self' },
    { label: 'Flux Control', url: './flux-control', target: '_self' }
  ];

  public selectedImage = 'ice';

  showImage: boolean = true;

  public imageItems = [
    {
      id: 1,
      title: 'Forest',
      imageUrl: 'https://images.pexels.com/photos/14111238/pexels-photo-14111238.jpeg',
      altText: 'Image',
      width: 300
    },
    {
      id: 2,
      title: 'Ice',
      imageUrl: 'https://images.pexels.com/photos/2575002/pexels-photo-2575002.jpeg',
      altText: 'Image',
      width: 300
    },
    {
      id: 3,
      title: 'Ocean',
      imageUrl: 'https://images.pexels.com/photos/18027832/pexels-photo-18027832.jpeg',
      altText: 'Image',
      width: 300
    },
    {
      id: 4,
      title: 'City',
      imageUrl: 'https://images.pexels.com/photos/16705978/pexels-photo-16705978.jpeg',
      altText: 'Image',
      width: 300
    }
  ];


}
