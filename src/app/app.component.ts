import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2, ViewChild } from '@angular/core';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private currentTheme = 'theme-light'
  isOpen: boolean = false

  @ViewChild(SidenavComponent) sidenavComp?: SidenavComponent
  @ViewChild(HamburgerComponent) hamburgerComp?: HamburgerComponent

  get isDarkMode(): boolean {
    return this.currentTheme === 'theme-dark'
  }


  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.currentTheme = localStorage.getItem('activeTheme') || 'theme-light'
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme)
  }

  /**
   * Switches the app between light/dark mode
   * @param isDarkMode sets light/dark mode
   */
  switchMode(isDarkMode: boolean): void {
    this.currentTheme = isDarkMode ? 'theme-dark' : 'theme-light'
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme)
    localStorage.setItem('activeTheme', this.currentTheme)
  }

  /**
   *  Toggles menu icon open/close class
   */
  toggle(): void {
    this.isOpen = !this.isOpen
    this.hamburgerComp!.onToggle(this.isOpen)
    this.sidenavComp?.sidenav?.toggle()
  }
}
