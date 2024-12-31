import { AsyncPipe } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'ngs-basic',
    templateUrl: './basic.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        // ng
        RouterOutlet,
        RouterLink,
        AsyncPipe,
        // mat
        MatButtonModule,
    ],
})
export class BasicLayoutComponent {
    // template
    title = signal('Angular Starter');

    // DI
    #authService = inject(AuthService);
    user$ = this.#authService.user$;

    logout() {
        this.#authService.logoutAndRedirect();
    }
}
