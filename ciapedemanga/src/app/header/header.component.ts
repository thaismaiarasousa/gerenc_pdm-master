import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;
  isScrolled = true;
  animateImage = false;

  constructor(private router: Router, private viewportScroller: ViewportScroller) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
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

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  navegarParaCalendario(rota: string, sectionId: string) {
    this.router.navigate(['/' + rota]).then(() => {
      const offset = 5550;
      this.viewportScroller.scrollToAnchor(sectionId);
       this.scrollDown(offset);
    });
  }

  private scrollDown(offset: number) {
    const currentPosition = this.viewportScroller.getScrollPosition()[1];
    this.viewportScroller.scrollToPosition([0, currentPosition + offset]);
  }
}