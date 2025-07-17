import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [OverlayPanelModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  SelectedOption: any = null;
  selectedNotification: any = null;
  @ViewChild('option') option!: OverlayPanel;
  @ViewChild('notification') notification!: OverlayPanel;

  notifications = [
    {
      title: 'Nouveau devoir',
    },
    {
      title: 'Nouvelle emploi du temps',
    },
    {
      title: "Justification d'absence",
    },
  ];

  options = [
    {
      title: 'Mon compte',
      icon: 'circle-user',
    },
    {
      title: 'Message',
      icon: 'fas fa-message',
    },
    {
      title: 'Déconnexion',
      icon: 'fas fa-arrow-right-to-bracket',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleNotification(event: any) {
    this.notification.toggle(event);
  }

  toggleOption(event: any) {
    this.option.toggle(event);
  }

  selectNotification(notification: any) {
    this.selectedNotification = notification;
    this.option.hide();
  }

  selectOption(option: any) {
    this.SelectedOption = option;
    this.option.hide();
  }
}
