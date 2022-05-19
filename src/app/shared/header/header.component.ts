import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('logged') logged: ElementRef | undefined;
  constructor(private authService: AuthService) { }

  userLogged = this.authService.getUserLogged();

  ngOnInit(): void {
  }
  
  ngOnChanges(): boolean {
    if (this.logged == undefined) {
      console.log("false")
      return false;
    } else {
      console.log("true")
      return true;
    }
  }


  log(foto: any) {

    console.log(foto)
  }
}
