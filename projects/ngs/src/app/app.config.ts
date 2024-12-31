import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth as provideFireAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
    provideRouter,
    withComponentInputBinding,
    withInMemoryScrolling,
    withViewTransitions,
} from '@angular/router';
import { firebaseConfig } from '../env/dev.env';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideHttpClient(withFetch()),
        provideRouter(
            routes,
            withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
            withComponentInputBinding(),
            withViewTransitions()
        ),
        provideAnimationsAsync(),

        // firebase
        provideFirebaseApp(() => initializeApp(firebaseConfig)),
        provideFireAuth(() => getAuth()),
        provideFirestore(() => getFirestore()),
        provideDatabase(() => getDatabase()),
        provideStorage(() => getStorage()),
        provideFunctions(() => getFunctions()),
    ],
};
