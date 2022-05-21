import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.scss']
})
export class AdvertiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  formatLabel(value: number) {
    if (value >= 1) {
      return value + ' hectárea ';
    }
    if (value==0.5) {
      
      return 'media hectarea';
    }

    return value;
  }
}
