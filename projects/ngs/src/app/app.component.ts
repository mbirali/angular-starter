import {
    ChangeDetectionStrategy,
    Component,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'ngs-root',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [RouterOutlet, MatIcon],
    template: `
        <h1 class="text-center font-bold">Welcome to {{ title() }}!</h1>
        <router-outlet />
    `,
    styles: [],
})
export class AppComponent {
    title = signal('Angular Starter');
    // or
    //  title = 'Angular Starter';
}
