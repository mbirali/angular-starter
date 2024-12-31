import {
    ChangeDetectionStrategy,
    Component,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../shared/components/logo/logo.component';

@Component({
    selector: 'ngs-confirmation',
    templateUrl: './confirmation.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        // ng
        RouterLink,
        // mat
        MatCard,
        MatButtonModule,
        // ngs
        LogoComponent,
    ]
})
export default class ConfirmationComponent {}
