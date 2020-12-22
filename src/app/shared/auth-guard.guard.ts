import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthFirebaseService } from './auth-firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private authService : AuthFirebaseService, private route : Router) {
    
  }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    if(this.authService.authStatus)
      return true
    else
      this.route.navigate([""])
  }
}
