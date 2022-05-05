import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  usuario = {
    name: "",
    email: "",
    password: "",
  }

  register() {//logear usuario
    const { email, password } = this.usuario;
    this.authService.login(email, password).then(res => {
      console.log("usuario registrado ",res)
    });
  }

  loginWithGoogle() {//Iniciar sesion con Google
    const { email, password } = this.usuario;
    this.authService.loginGoogle(email, password).then(res => {
      console.log("usuario registrado ",res)
    });

    console.log(this.usuario);
  }
  ngOnInit(): void {
  }

}
