import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss']
})
export class LogginComponent implements OnInit {

  usuario = {
    email: "",
    password: "",
  }

  ngOnInit(): void {

  }
  mostrar(foto: any) {

    // console.log("-------> "+foto)

  }

  constructor(private authService: AuthService, private router: Router) {

  }

  login() {//logear usuario
    const { email, password } = this.usuario;
    this.authService.login(email, password).then(res => {
      console.log("usuario registrado ")
      
    });
  }

  loginWithGoogle() {//Iniciar sesion con Google
    const { email, password } = this.usuario;
    this.authService.loginGoogle(email, password).then(res => {
      console.log("usuario registrado ")
      this.router.navigate(['/'])
      .then(() => {
        window.location.reload();
      });
    });

    // console.log(this.usuario);
  }

  getUserLogged() {
    this.authService.getUserLogged().subscribe(res => res?.email);
  }

  logOut() {
    this.authService.logOut();
    window.location.reload();
  }
  userLogged = this.authService.getUserLogged();

}
