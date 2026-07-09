import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';

@Component({
  selector: 'app-home',
  imports: [ButtonModule, BreadcrumbModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public routesOptions = {
    fluxcontrol: '/flux-control'
  }

  public items = [
    { label: 'Home', url: '/' }
  ];


  private router = inject(Router);

  redirect(nameComponent: string) {
    this.router.navigate([nameComponent]);
  }
}
