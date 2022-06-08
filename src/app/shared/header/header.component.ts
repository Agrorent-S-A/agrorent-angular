import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('logged') logged: ElementRef | undefined;
  constructor(private authService: AuthService,private router:Router) { }

  userLogged = this.authService.getUserLogged();

  ngOnInit(): void {
    
  }
  
  ngOnChanges(): boolean {
    if (this.logged == undefined) {
      
      return false;
    } else {
      
      return true;
    }
    
  }


  log(foto: any) {

    console.log(foto)
  }
}
