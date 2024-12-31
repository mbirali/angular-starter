import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { Ai1FormValidatorError } from '../../shared/form/form.errors';
import { AuthService } from '../auth.service';

@Component({
    selector: 'ngs-forgot-password',
    templateUrl: './forgot-password.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        // ng
        RouterLink,
        FormsModule,
        ReactiveFormsModule,
        // mat
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatCard,
        // ngs
        LogoComponent,
    ],
})
export default class ForgotPasswordComponent {
    // form
    forgotPwdForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
    });

    // DI
    #formBuilder = inject(FormBuilder);
    #authService = inject(AuthService);

    // helpers
    isSpin = signal(false);
    isEmailSent = signal(false);

    // getters & setters
    get isFormDisabled() {
        return this.forgotPwdForm.disabled || this.forgotPwdForm.invalid;
    }

    // hooks
    ngOnInit(): void {
        this.forgotPwdForm = this.#formBuilder.group({
            email: new FormControl('', [Validators.required, Validators.email]),
        });
    }

    // public
    getError(ctrl: AbstractControl, name: string) {
        return Ai1FormValidatorError.getFormControlErrorText(ctrl, name);
    }

    async forgotPassword() {
        try {
            this.isSpin.set(true);
            this.forgotPwdForm.disable();
            await this.#authService.sendPasswordResetEmail(
                this.forgotPwdForm.value.email
            );
        } finally {
            this.isSpin.set(false);
            this.forgotPwdForm.enable();
        }
    }
}
