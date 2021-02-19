import { Component, Inject, Renderer2, ViewChild, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HamburgerComponent } from '../hamburger/hamburger.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { AuthenticationService } from 'src/shared/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private currentTheme = 'theme-light'
  isOpen: boolean = false

  @ViewChild(SidenavComponent) sidenavComp?: SidenavComponent
  @ViewChild(HamburgerComponent) hamburgerComp?: HamburgerComponent

  get isDarkMode(): boolean {
    return this.currentTheme === 'theme-dark'
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2,
    private auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.currentTheme = localStorage.getItem('activeTheme') || 'theme-light'
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme)
  }

  /**
   * Switches the app between light/dark mode
   * @param isDarkMode sets light/dark mode
   */
  onSwitchMode(isDarkMode: boolean): void {
    this.currentTheme = isDarkMode ? 'theme-dark' : 'theme-light'
    this.renderer.setAttribute(this.document.body, 'class', this.currentTheme)
    localStorage.setItem('activeTheme', this.currentTheme)
  }

  /**
   *  Toggles menu & slidenav open/close
   */
  onToggle(): void {
    this.isOpen = !this.isOpen
    this.hamburgerComp!.onToggle(this.isOpen)
    this.sidenavComp?.sidenav?.toggle()
  }

  /**
   * Signs the user out of the application
   */
  onSignOut(): void {
    this.auth.signOut().then(res => {
      console.log(res)
    }).catch(err => console.log(err))
  }

}
