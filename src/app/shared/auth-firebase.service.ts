import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  public authStatus : boolean
  public UserUid : string
  public UserEmail : string
  public messageStatus : string

  constructor(private authFirebase : AngularFireAuth, public route : Router)
  {
    this.authStatus = false
    this.messageStatus = ""
  }

  signIn(email : string, mdp : string)
  {
    this.authFirebase.signInWithEmailAndPassword(email, mdp).then(
      /* Resolve : */(value) => { 
        this.UserUid = value.user.uid,
        this.UserEmail = value.user.email,
        this.authStatus = true,
        this.route.navigate(["jeuxvideo"])
      },
      /* Reject : */(value) => { this.messageStatus = value.message }
    ).catch(
      (err) => { console.log("Erreur : ", err.message) }
    )
  }

  signUp(email : string, mdp : string)
  {
    this.authFirebase.createUserWithEmailAndPassword(email, mdp).then(
      /*resolve*/(value) => { this.route.navigate([""]) },
      /*reject*/(value) => { this.route.navigate(["createAccount"]) }
    ).catch(
      (err) => { console.log("Erreur : ", err.message) }
    )
  }


  logout()
  {
    this.authStatus = false
    this.route.navigate([""])
  }

}
