import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';

@Component({
    selector: 'ngs-logo',
    standalone: true,
    templateUrl: './logo.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {
    favicon = 'favicon.ico';
    alt = 'Angular-Starter-Logo';
}
