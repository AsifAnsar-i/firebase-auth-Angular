import { Injectable, inject, signal } from '@angular/core';
import { Observable, from } from 'rxjs';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  user,
} from '@angular/fire/auth';
import { UserInterface } from './user.interface';



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebase = inject(Auth);
  user$ = user(this.firebase)
  currentUser$ig = signal<UserInterface|null|undefined>(undefined)

  register(
    email: string,
    username: string,
    password: string
  ): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebase,
      email,
      password
    ).then((response) =>
      updateProfile(response.user, { displayName: username })
    );

    return from(promise);
  }

    login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(this.firebase, email, password).then(()=>{});
    return from(promise);
    }

    logout(): Observable<void> {
    const promise = signOut(this.firebase)
    return from(promise);
    }

}
