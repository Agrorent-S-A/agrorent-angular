import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnunciosService } from '../services/anuncios.service';



@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.scss']
})
export class AdvertiseComponent implements OnInit {
  title!: FormControl;
  description!: FormControl;
  form!: FormGroup;
  submited = false;

  constructor(private fb: FormBuilder, private _AdvService: AnunciosService) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  onSubmit() {

  }

  addAnuncio() {
    this.submited = true;
    if (this.form.invalid) {
      return;
    }
    const empleado: any = {
      title: this.form.value.title,
      description: this.form.value.description,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
    }
    console.log(empleado)
    this._AdvService.agregarEmpleado(empleado).then(() => {


      console.log('empleado registrado con exito')
      // this.router.navigate(['/list-empleados']);
    }).catch(error => {
      console.log(error);
    });
  }

  formatLabel(value: number) {
    if (value >= 1) {
      return value + ' hectárea ';
    }
    if (value == 0.5) {
      return 'media hectarea';
    }
    return value;
  }
}
