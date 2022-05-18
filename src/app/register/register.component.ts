import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,  } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  usuario = {
    name: "",
    email: "",
    password: "",
    password2: ""
  }

  ngOnInit(): void {
  }

  constructor(private authService: AuthService) {
    this.form = this.createForm();
  }

  createForm() {
    return new FormGroup({
      // name: new FormControl('', [Validators.required, Validators.pattern('[a-z|A-ZÀ-ÿ| |\u00f1|\u00d1]*'), Validators.minLength(10), Validators.maxLength(20)]),//puede contener minusculas, mayusculas, espacios, ñ y Ñ.
      // email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),//formato de un email 00XX@xxx.xxx
      // password: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(20)]),// Validators.pattern('^[a-zA-Z0-9]{10,20}'),
      // password2: new FormControl('', [Validators.required])
      name: new FormControl('', [Validators.required]),//puede contener minusculas, mayusculas, espacios, ñ y Ñ.
      email: new FormControl('', [Validators.required]),//formato de un email 00XX@xxx.xxx
      password: new FormControl('', [Validators.required]),// Validators.pattern('^[a-zA-Z0-9]{10,20}'),
      password2: new FormControl('', [Validators.required])
    })
  }


  register() {//logear usuario
    
    const mail = this.form.get('email')?.value;
    const pass = this.form.get('password')?.value;
    
    if (this.form.valid) {
      
      const { email, password } = this.usuario;
      this.authService.register(mail,pass).then(res =>{
        console.log("registrado",res)
      })
      
    } else {

      console.log("no registrado")
    }
  }

  loginWithGoogle() {//Iniciar sesion con Google
    const { email, password } = this.usuario;
    this.authService.loginGoogle(email, password).then(res => {
      console.log("usuario registrado ", res)
    });

    console.log(this.usuario);
  }


}
