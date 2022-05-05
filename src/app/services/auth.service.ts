import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularAuth: AngularFireAuth) {

  }

  async register(email: string, password: string) {
    try {
      return await this.angularAuth.createUserWithEmailAndPassword(email, password);

    } catch (err) {
      alert("error al iniciar sesion");
      return null;
    }

  }
  async login(email: string, password: string) {
    try {
      return await this.angularAuth.signInWithEmailAndPassword(email, password);

    } catch (err) {
      alert("error al iniciar sesion");
      return null;
    }

  }

  async loginGoogle(email: string, password: string) {
    try {
      return await this.angularAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())

    } catch (err) {
      alert("error al iniciar sesion con Google");
      return null;
    }

  }
  getUserLogged() {
   return this.angularAuth.authState;
  }

  logOut() {
    return this.angularAuth.signOut();
  }

}
