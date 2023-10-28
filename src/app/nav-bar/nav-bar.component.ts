import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  scrollingDown = false;
  prevScrollPos = window.pageYOffset;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const currentScrollPos = window.pageYOffset;
    this.scrollingDown = currentScrollPos > this.prevScrollPos;
    this.prevScrollPos = currentScrollPos;
  }
}
