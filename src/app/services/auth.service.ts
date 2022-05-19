import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { sendEmailVerification } from '@firebase/auth';
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogged?:boolean;

  constructor(private angularAuth: AngularFireAuth,private afAuth: AngularFireAuth,) {

  }

  async register(email: string, password: string) {
    const Newuser = {email,password}
    try {
      this.userLogged= true;
      (await this.afAuth.currentUser)?.sendEmailVerification();
      return await this.angularAuth.createUserWithEmailAndPassword(Newuser.email,Newuser.password);

    } catch (err) {
      this.userLogged= false;
      alert("error al iniciar sesion");
      return null;
    }

  }

  async login(email: string, password: string) {
    try {
      this.userLogged= true;
      return await this.angularAuth.signInWithEmailAndPassword(email, password);

    } catch (err) {
      this.userLogged= false;
      alert("error al iniciar sesion");
      return null;
    }

  }

  async loginGoogle(email: string, password: string) {
    try {
      this.userLogged= true;
      return await this.angularAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())

    } catch (err) {
      this.userLogged= false;
      alert("error al iniciar sesion con Google");
      return null;
    }

  }
  
  logged() {
    console.log(this.userLogged)
    if (this.userLogged == false) {
      return true;
    } else {
      console.log('EEEEE')
      return false
    }
  }

  getUserLogged() {
    return this.angularAuth.authState;
  }

  logOut() {
    this.userLogged= false;
    return this.angularAuth.signOut();
  }

}
