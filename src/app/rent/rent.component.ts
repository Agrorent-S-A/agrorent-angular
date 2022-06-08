import { Component, OnInit } from '@angular/core';
import { AnunciosService } from '../services/anuncios.service';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';
@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {
  anuncios: any[] = [];
  images: string[];
  constructor(private _advService: AnunciosService, private storage: Storage) {
    this.images = [];
  }

  ngOnInit(): void {

    this.getAnuncio();
  }

  randomIntFromInterval(min: number, max: number) {

    const random = Math.floor(Math.random() * (max - min + 1) + min)
    return random;
    
  }


  getAnuncio() {
    this._advService.getEmpleados().subscribe(data => {
      this.anuncios = [];
      const lastPosition = this.images.length;
      console.log()
      data.forEach((element: any) => {
        this.anuncios.push({
          id: element.payload.doc.id,
          image: this.images,
          ...element.payload.doc.data()
        });

      });
      console.log("ANUNCIOS", lastPosition)
    });
  }


}
