import { Component, OnInit } from '@angular/core';
import { AnunciosService } from '../services/anuncios.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {
  anuncios: any[] = [];
  constructor(private _advService: AnunciosService) { }

  ngOnInit(): void {
    this.getAnuncio();
  }
  getAnuncio(){
    this._advService.getEmpleados().subscribe(data => {
      this.anuncios = [];
      data.forEach((element: any) => {
        this.anuncios.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
      console.log(this.anuncios)
    });
  }

}
