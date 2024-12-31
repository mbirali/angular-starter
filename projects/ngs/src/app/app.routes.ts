import {
    canActivate,
    redirectLoggedInTo,
    redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { Routes } from '@angular/router';
import { BasicLayoutComponent } from './layouts/basic/basic.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
        component: BasicLayoutComponent,
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
                component: NotFoundComponent,
            },
        ],
    },
];
