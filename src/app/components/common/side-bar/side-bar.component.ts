import {
  Component,
  ElementRef,
  OnInit,
  output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ComponentModule } from '../../component.module';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [ComponentModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent implements OnInit {
  menuItems: any = [];
  connectedUser: any;
  toggleSidebarEvent = output<boolean>();
  isMinimized = false;
  @ViewChild('toggleSidebarButton') toggleSidebarButton!: ElementRef;
  @ViewChild('icon') icon!: ElementRef;
  @ViewChild('header') header!: ElementRef;
  @ViewChild('menuList', { static: false }) menuList!: ElementRef;

  constructor(
    private readonly router: Router,
    private readonly renderer: Renderer2,
    private readonly commonService: CommonService
  ) {}

  ngOnInit(): void {
    this.menuItems = this.commonService.getMenusItems();
  }

  toggleSidebar() {
    this.isMinimized = !this.isMinimized;
    if (!this.isMinimized) {
      this.renderer.removeClass(this.header.nativeElement, 'header-toggler');
      this.renderer.removeClass(
        this.toggleSidebarButton.nativeElement,
        'toggled'
      );
      this.renderer.removeClass(this.icon.nativeElement, 'fa-ellipsis-v');
      this.renderer.addClass(this.icon.nativeElement, 'fa-list');
    } else {
      this.renderer.addClass(this.header.nativeElement, 'header-toggler');
      this.renderer.addClass(this.toggleSidebarButton.nativeElement, 'toggled');
      this.renderer.removeClass(this.icon.nativeElement, 'fa-list');
      this.renderer.addClass(this.icon.nativeElement, 'fa-ellipsis-v');
    }
    this.toggleSidebarEvent.emit(this.isMinimized);
  }

  isMenuActive(menuItem: any): boolean {
    if (menuItem.route) {
      return this.router.url.includes(menuItem.route);
    } else if (menuItem.items) {
      return menuItem.items.some((item: any) =>
        this.router.url.includes(item.route)
      );
    }
    return false;
  }

  removeHoverSidebar() {
    let wrapper = document.querySelector('.wrapper.sidebar_minimize');
    if (wrapper) {
      wrapper.classList.remove('sidebar_minimize_hover');
    }
  }

  addHoverSidebar() {
    let wrapper = document.querySelector('.wrapper.sidebar_minimize');
    if (wrapper) {
      wrapper.classList.add('sidebar_minimize_hover');
    }
  }

  closeSidebar() {
    const sidebar = document.querySelector('.ydd-sidebar') as Element;
    sidebar.classList.toggle('show');
  }
}
