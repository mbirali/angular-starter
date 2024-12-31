import { Routes } from '@angular/router';
import { NGS_TITLE_SUFFIX } from '../app.routes';

export default [
    {
        path: 'login',
        title: `Login ${NGS_TITLE_SUFFIX}`,
        loadComponent: () => import('./login/login.component'),
    },
    {
        path: 'register',
        title: `Register ${NGS_TITLE_SUFFIX}`,
        loadComponent: () => import('./register/register.component'),
    },
    {
        path: 'forgot-password',
        title: `Forgot Password ${NGS_TITLE_SUFFIX}`,
        loadComponent: () =>
            import('./forgot-password/forgot-password.component'),
    },
    {
        path: 'confirmation',
        title: `Confirmation ${NGS_TITLE_SUFFIX}`,
        loadComponent: () => import('./confirmation/confirmation.component'),
    },
] as Routes;
