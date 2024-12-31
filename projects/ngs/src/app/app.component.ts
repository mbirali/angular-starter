import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'ngs-root',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [RouterOutlet],
    template: ` <router-outlet /> `
})
export class AppComponent {}
