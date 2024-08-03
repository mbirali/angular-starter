import { DOCUMENT } from '@angular/common';
import { Component, inject, signal, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import {
  TonalPalette,
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from '@material/material-color-utilities';

export const DEFAULT_COLOR = '#8714fa';

type WithStylesheet = typeof globalThis & {
  [stylesheetName: string]: CSSStyleSheet | undefined;
};

type colorsFromPaletteConfig = {
  primary: { hex: string; tone: number }[];
  secondary: { hex: string; tone: number }[];
  tertiary: { hex: string; tone: number }[];
  neutral: { hex: string; tone: number }[];
  neutralVariant: { hex: string; tone: number }[];
  error: { hex: string; tone: number }[];
};

@Component({
  selector: 'et-theme',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatMenuModule,
    FormsModule,
  ],
})
export class ThemeComponent {
  title = 'portal-teste';
  color = signal(DEFAULT_COLOR);
  #document = inject(DOCUMENT);

  onColorChange(event: any) {
    this.themeFromSelectedColor();

    this.color.set(event.value);
  }

  themeFromSelectedColor(color?: string, isDark?: boolean): void {
    const tones = [0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 99, 100];
    const theme = themeFromSourceColor(
      argbFromHex(this.color() ?? DEFAULT_COLOR)
    );

    const colors = Object.entries(theme.palettes).reduce(
      (acc: any, curr: [string, TonalPalette]) => {
        const hexColors = tones.map((tone) => ({
          tone,
          hex: hexFromArgb(curr[1].tone(tone)),
        }));

        return { ...acc, [curr[0]]: hexColors };
      },
      {}
    );

    this.createCustomProperties(colors, 'p');
  }

  createCustomProperties(
    colorsFromPaletteConfig: colorsFromPaletteConfig,
    paletteKey: 'p' | 't',
    doc?: DocumentOrShadowRoot
  ) {
    let styleString = ':root,:host{';

    for (const [key, palette] of Object.entries(colorsFromPaletteConfig)) {
      palette.forEach(({ hex, tone }) => {
        if (key === 'primary') {
          styleString += `--${key}-${tone}:${hex};`;
        } else {
          styleString += `--${paletteKey}-${key}-${tone}:${hex};`;
        }
      });
    }
    styleString += '}';

    this.applyThemeString(styleString, 'angular-material-theme');
  }

  applyThemeString(themeString: string, ssName = 'angular-material-theme') {
    let sheet = (globalThis as WithStylesheet)[ssName];

    if (!sheet) {
      sheet = new CSSStyleSheet();
      (globalThis as WithStylesheet)[ssName] = sheet;
      this.#document.adoptedStyleSheets.push(sheet);
    }

    sheet.replaceSync(themeString);
  }
}
