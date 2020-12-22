import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from 'src/app/shared/auth-firebase.service';

@Component({
  selector: 'app-jeux-video-main',
  templateUrl: './jeux-video-main.component.html'
})
export class JeuxVideoMainComponent implements OnInit {

  constructor(public authService : AuthFirebaseService) { }

  ngOnInit(): void {
  }

}
