import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'ac-toolbar',
    imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
    templateUrl: './toolbar.component.html',
    styles: `
        .spacer {
            flex: 1 1 auto;
        }
    `,
})
export class ToolbarComponent {}
