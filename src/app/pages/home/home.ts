import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { homeButtonList } from '../../interfaces/home-button';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, BreadcrumbModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public items = [
    { label: 'Home', url: '/', target: '_self' }
  ];

  public homeButtonList = homeButtonList

  private router = inject(Router);

  redirect(nameComponent: string) {
    this.router.navigate([nameComponent]);
  }
}
