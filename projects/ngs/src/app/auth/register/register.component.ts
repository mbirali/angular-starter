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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { Ai1FormValidatorError } from '../../shared/form/form.errors';
import { AuthService } from '../auth.service';

const REGITER_FORM_PROPS = {
    EMAIL: 'email',
    USERNAME: 'username',
    PASSWORD: 'password',
};

@Component({
    selector: 'ngs-register',
    templateUrl: './register.component.html',
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
export default class RegisterComponent implements OnInit {
    // form
    registerProps = REGITER_FORM_PROPS;
    registerForm: FormGroup;

    // DI
    #formBuilder = inject(FormBuilder);
    #authService = inject(AuthService);

    // helpers
    isSpin = signal(false);

    // getters & setters
    get isFormDisabled() {
        return this.registerForm.disabled || this.registerForm.invalid;
    }

    // hooks
    ngOnInit(): void {
        this.registerForm = this.#formBuilder.group({
            [this.registerProps.EMAIL]: new FormControl('', [
                Validators.required,
                Validators.email,
            ]),
            [this.registerProps.USERNAME]: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(15),
            ]),
            [this.registerProps.PASSWORD]: new FormControl('', [
                Validators.required,
                Validators.minLength(6),
            ]),
        });
    }

    // public
    getError(ctrl: AbstractControl, name: string) {
        return Ai1FormValidatorError.getFormControlErrorText(ctrl, name);
    }

    async registerEmail() {
        try {
            this.isSpin.set(true);
            this.registerForm.disable();

            await this.#authService.createUserWithEmailAndPassword(
                this.registerForm.value
            );
        } finally {
            this.isSpin.set(false);
            this.registerForm.enable();
        }
    }
}
