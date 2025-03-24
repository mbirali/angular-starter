import {
    canActivate,
    redirectLoggedInTo,
    redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';



export const NGS_TITLE_SUFFIX = ' | NGS';

const redirectUnauthorizedToLogin = () =>
    redirectUnauthorizedTo(['auth/login']);
const redirectLoggedInToDomain = () => redirectLoggedInTo(['/domain']);

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full',
    },
    {
        path: '',
        loadComponent: () => import('./layouts/basic/basic.component').then(m => m.BasicLayoutComponent),
        children: [
            {
                path: 'auth',
                loadChildren: () => import('./auth/auth.routes'),
                ...canActivate(redirectLoggedInToDomain),
            },
            {
                path: 'domain',
                loadComponent: () =>
                    import('./modules/domain/domain.component'),
                ...canActivate(redirectUnauthorizedToLogin),
            },
            {
                path: '**',
                loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent),
            },
        ],
    },
];
