import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgFor} from '@angular/common';

@Component({
  selector: 'ac-toolbar',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, NgFor],
  templateUrl: './toolbar.component.html',
})
export class ToolbarComponent {
    themes = [
        { label: 'Default', icon: 'restore', class: 'default-theme' },
        { label: 'Light', icon: 'wb_sunny', class: 'light-mode' },
        { label: 'Dark', icon: 'nights_stay', class: 'dark-mode' },
        { label: 'magenta', icon: 'palette', class: 'magenta-theme' },
        { label: 'yellow', icon: 'palette', class: 'yellow-theme' },
        { label: 'orange', icon: 'palette', class: 'orange-theme' },
        { label: 'cyan', icon: 'palette', class: 'cyan-theme' }
      ];

  languages = ['Français (Fr)', 'Arabic (Ar)','English (En)', 'Español (Sp)'];

  roles = ['Admin', 'Customer'];

  changeTheme(themeClass: string) {
    document.body.classList.remove(...this.themes.map(t => t.class));
    document.body.classList.add(themeClass);
  }
}
