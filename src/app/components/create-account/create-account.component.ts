import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFirebaseService } from 'src/app/shared/auth-firebase.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html'
})
export class CreateAccountComponent implements OnInit {

  signUpForm : FormGroup

  constructor(private formB : FormBuilder, public authService : AuthFirebaseService) { }

  ngOnInit(): void {
    this.initForm()
  }

  submit()
  {
    if(!this.signUpForm.invalid)
    {
      this.authService.signUp(this.signUpForm.value.email, this.signUpForm.value.password)
    }
  }

  initForm()
  {
    this.signUpForm = this.formB.group(
      {
        email : ["loic@bstorm.be", Validators.required],
        password : ["test1234", Validators.required]
      }
    )
  }

}
