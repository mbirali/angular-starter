import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
    selector: 'ngs-domain',
    templateUrl: './domain.component.html',
    imports: [MatCardModule, MatChipsModule, MatButtonModule],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DomainComponent {
    longText = `This is a step by step practical guide to secure an MVP with Firebase and Angular`;
    link = 'https://buymeacoffee.com/mbirali/e/289776';

    chips = [
        'Angular',
        'Angular Material',
        'TailwindCss',
        'Firebase',
        'Prettier',
    ];
}
