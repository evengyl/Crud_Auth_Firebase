import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFirebaseService } from 'src/app/shared/auth-firebase.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit {

  loginForm : FormGroup

  constructor(private formB : FormBuilder, public authService : AuthFirebaseService) { }

  ngOnInit(): void {
    this.initLoginForm()
  }


  initLoginForm()
  {
    this.loginForm = this.formB.group(
      {
        email : ["loic@bstorm.be", Validators.required],
        password : ["test1234", Validators.required]
      }
    )
  }


  submit()
  {
    if(!this.loginForm.invalid)
    {
      this.authService.signIn(this.loginForm.value.email, this.loginForm.value.password)
    }
  }

}
