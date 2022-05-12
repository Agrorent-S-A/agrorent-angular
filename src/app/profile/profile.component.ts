import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  

  constructor(private authService: AuthService,private router:Router) { }

  userLogged = this.authService.getUserLogged();
  ngOnInit(): void {
    console.log("USER --> " + this.authService.getUserLogged)
  }
  logOut() {
    
    this.router.navigate(['/']);
    this.authService.logOut();
  }

}
