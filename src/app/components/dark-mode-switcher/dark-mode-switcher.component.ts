import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-dark-mode-switcher',
  templateUrl: './dark-mode-switcher.component.html',
  styleUrls: ['./dark-mode-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class DarkModeSwitcherComponent {
  /**
   * Property that checks if the component changes from light/dark mode
   */
  @Input() isDarkMode = false;
  /**
   * Emitter to notify parent wether the theme has changed into light/dark mode
   */
  @Output() readonly darkModeSwitched = new EventEmitter<boolean>();

  /**
   * Emits wether the app changes into light/dark mode
   * @param checked tells parent when to switch to dark mode or not
   */
  onDarkModeSwitched({ checked }: MatSlideToggleChange) {
    this.darkModeSwitched.emit(checked);
  }

}
