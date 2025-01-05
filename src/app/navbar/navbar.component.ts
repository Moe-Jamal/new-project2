import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @ViewChild('navBar') myNav!: ElementRef;
  @HostListener('window:scroll', [])
  onScroll(): void {
    if (window.scrollY > 10) {
      this.myNav.nativeElement.classList.replace('py-4', 'py-2');
    } else {
      this.myNav.nativeElement.classList.replace('py-2', 'py-4');
    }
  }
}
