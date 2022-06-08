import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AnunciosService } from '../services/anuncios.service';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
import { Router } from '@angular/router';



@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.scss']
})
export class AdvertiseComponent implements OnInit {
  images: string[]
  Auximages: string[];
  title!: FormControl;
  description!: FormControl;
  form!: FormGroup;
  submited = false;
  actualImage: string;

  constructor(private fb: FormBuilder, private _AdvService: AnunciosService,
    private storage: Storage, private router: Router
  ) {

    this.actualImage = "";
    this.images = [];
    this.Auximages = [];
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      h2: ['', Validators.required],
      soilType: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log('this.storage', ref(this.storage, 'images'))
  }


  addAnuncio() {
    this.submited = true;

    if (this.form.invalid) {
      return;
    }

    const empleado: any = {
      title: this.form.value.title,
      description: this.form.value.description,
      price: this.form.value.price,
      h2: this.form.value.h2,
      soilType: this.form.value.soilType,
      // image:,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
    }

    this._AdvService.agregarEmpleado(empleado).then(() => {
      this.router.navigate(['rent'])
      console.log('empleado registrado con exito');
    }).catch(error => {
      console.log(error);
    });

  }

  DeleteAdv(id: string) {
    this._AdvService.deleteAdv(id).then(() => {
      console.log("empleado elminado")
    }).catch(error => {
      console.log(error)
    })
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

  uploadImage($event: any) {
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `images/${file.name}`)
    uploadBytes(imgRef, file)
      .then(data => {
        this.getImage();
        console.log(data)
      })
      .catch(error => console.log(error));
  }

  getImage() {
    const imageRef = ref(this.storage, 'images')
    listAll(imageRef)
      .then(async response => {
        for (let item of response.items) {
          if (this.images.length == 0) {
            const url = await getDownloadURL(item);
            this.Auximages = [];
            this.Auximages.push(this.images[this.images.length])
            this.images.push(url);
          } else {
            this.images.push(this.images[this.images.length])
          }

        }
      })
      .catch(error => console.log('error', error))
  }



}
