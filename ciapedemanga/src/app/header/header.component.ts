import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  isScrolled = false;
  animateImage = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 50; 
    if (this.isMenuOpen) {
      this.isMenuOpen = this.isScrolled;
    }
    this.isScrolled = true

    const isScrollAtBottom = window.scrollY >= document.documentElement.scrollHeight - window.innerHeight;

    this.animateImage = isScrollAtBottom;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}