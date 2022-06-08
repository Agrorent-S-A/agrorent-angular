import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnunciosService } from '../services/anuncios.service';

@Component({
  selector: 'app-advertisement-info',
  templateUrl: './advertisement-info.component.html',
  styleUrls: ['./advertisement-info.component.scss']
})
export class AdvertisementInfoComponent implements OnInit {

  id: string | null;
  anuncios: any[] = [];

  constructor(
    private aRoute: ActivatedRoute,
    private _advService: AnunciosService
  ) {
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }
  
  randomIntFromInterval(min: number, max: number) {

    const random = Math.floor(Math.random() * (max - min + 1) + min)
    return random;
  
  }

  getAdv() {
    this._advService.infoAdv(this.id).subscribe(data => {
      console.log('data', data.payload.data())
      this.anuncios = [data.payload.data()];
    });
  }

  ngOnInit(): void {
    this.getAdv();
  }

}
