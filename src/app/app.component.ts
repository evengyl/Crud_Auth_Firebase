import { Component } from '@angular/core';
import { AuthFirebaseService } from './shared/auth-firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public authService : AuthFirebaseService) {
      
  }

  logout()
  {
    this.authService.logout();
  }
  title = 'DemoETU';
}
