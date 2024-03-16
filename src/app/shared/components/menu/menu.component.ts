import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Productos',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Categorías',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Tienda',
            icon: 'pi pi-dollar',
            routerLink: 'numeros'
          },
          {
            label: 'Blog',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes'
          }]
      },
      {
        label: 'Configuración',
        icon: 'pi pi-cog',
        routerLink: 'ordenar'
      }
    ];
  }

}
