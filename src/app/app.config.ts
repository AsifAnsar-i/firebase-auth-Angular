import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAjiE7J4qXJRjXVCke0B8wWGWR6NB7Kwg4',
  authDomain: 'angular-firebase-app-9f6c0.firebaseapp.com',
  projectId: 'angular-firebase-app-9f6c0',
  storageBucket: 'angular-firebase-app-9f6c0.appspot.com',
  messagingSenderId: '641304129432',
  appId: '1:641304129432:web:2a8223cd00da99509745ed',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    [
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()),
    ],
  ],
};
