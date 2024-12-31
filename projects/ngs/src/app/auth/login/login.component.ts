import {
    ChangeDetectionStrategy,
    Component,
    inject,
    OnInit,
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
import { MatDivider } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { Ai1FormValidatorError } from '../../shared/form/form.errors';
import { AuthService } from '../auth.service';

const LOGIN_FORM_PROPS = {
    EMAIL: 'email',
    PASSWORD: 'password',
};

@Component({
    selector: 'ngs-login',
    templateUrl: './login.component.html',
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
        MatDivider,
        MatCard,
        // ngs
        LogoComponent,
    ],
})
export default class LoginComponent implements OnInit {
    // form
    loginProps = LOGIN_FORM_PROPS;
    loginForm: FormGroup;

    // DI
    #formBuilder = inject(FormBuilder);
    #authService = inject(AuthService);

    // helpers
    isSpin = signal(false);

    // getters & setters
    get isFormDisabled() {
        return this.loginForm.disabled || this.loginForm.invalid;
    }

    // hooks
    ngOnInit(): void {
        this.loginForm = this.#formBuilder.group({
            [this.loginProps.EMAIL]: new FormControl('', [
                Validators.required,
                Validators.email,
            ]),
            [this.loginProps.PASSWORD]: new FormControl('', [
                Validators.required,
                Validators.minLength(6), // optional
            ]),
        });
    }

    // public
    getError(ctrl: AbstractControl, name: string) {
        return Ai1FormValidatorError.getFormControlErrorText(ctrl, name);
    }

    async loginEmail() {
        try {
            this.#enableProcess();
            await this.#authService.signInWithEmailAndPassword(
                this.loginForm.value
            );
        } finally {
            this.#disableProcess();
            this.loginForm.updateValueAndValidity();
        }
    }

    async loginGoogle() {
        try {
            this.#enableProcess();
            await this.#authService.signInWithPopupGoogle();
        } finally {
            this.#disableProcess();
        }
    }

    async loginGithub() {
        try {
            this.#enableProcess();
            await this.#authService.signInWithPopupGithub();
        } finally {
            this.#disableProcess();
        }
    }

    // private
    #enableProcess() {
        this.isSpin.set(true);
        this.loginForm.disable();
    }

    #disableProcess() {
        this.isSpin.set(false);
        this.loginForm.enable();
    }
}
