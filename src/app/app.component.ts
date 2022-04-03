import { Component } from '@angular/core';
import { MenuItem } from './core/models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour Of Heroes';
  menuItens: MenuItem [] = [
    {
      icon: "dashboard",
      routerLink: "/dashboard",
      toolTipText: "Dashboard"
    },
    {
      icon: "group",
      routerLink: "/heroes",
      toolTipText: "Heroes"
    }
  ]
}
