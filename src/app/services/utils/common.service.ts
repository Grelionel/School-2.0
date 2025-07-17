import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  getMenusItems() {
    const menuItems = [
      {
        name: 'Accueil',
        icon: 'fas fa-chart-pie',
        route: 'dashboard',
      },
      {
        name: 'Gestion des clients',
        icon: 'fas fa-users',
        route: 'customers',
      },
      {
        name: 'Accès au backoffice',
        icon: 'fas fa-user-cog',
        route: 'users',
      },
      {
        name: 'Aide',
        icon: 'fas fa-info-circle',
        route: 'help',
      },
    ];
  }
}
