import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from '../../../components/common/side-bar/side-bar.component';
import { FooterComponent } from '../../../components/common/footer/footer.component';
import { NavbarComponent } from '../../../components/common/navbar/navbar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent, FooterComponent, NavbarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  isSidebarMinimized = false;

  constructor() {}

  handleSidebarToggle(isMinimized: any) {
    this.isSidebarMinimized = isMinimized;
  }
}
