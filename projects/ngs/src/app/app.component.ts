import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'ans-root',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    imports: [RouterOutlet],
    template: `
        <h1 class="font-bold">Welcome to {{ title }}!</h1>

        <router-outlet />
    `,
    styles: [],
})
export class AppComponent {
    title = 'ngs';
}
