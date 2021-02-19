import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent implements OnInit {

  hamburger: any

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {}

  onToggle(status: boolean): void {
    this.hamburger = this.document.querySelector('.hamburger')

    if (status) {
      this.hamburger?.classList.add('open')
    } else {
      this.hamburger?.classList.remove('open')
    }
  }
}
