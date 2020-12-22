import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudFirebaseService } from 'src/app/shared/crud-firebase.service';

@Component({
  selector: 'app-jeuxvideo',
  templateUrl: './jeuxvideo.component.html'
})
export class JeuxvideoComponent implements OnInit {

  jeuxVideoForm : FormGroup
  categoriesSelect = []

  categories = [
    "Rpg",
    "FPS",
    "Combat",
    "Course",
    "MMO",
    "AAA",
    "Indé",
    "Simulation",
    "Gestion",
    "Stratégie"
  ]

  constructor(private formB : FormBuilder, private crud : CrudFirebaseService) { }

  ngOnInit(): void {
    this.initForm()
  }


  addCateg(nameCateg : string)
  {
    this.categoriesSelect.push(nameCateg)
  }

  removeCategSelect(nameCateg : string)
  {
    let index = this.categoriesSelect.indexOf(nameCateg)
    if(index > -1)
      this.categoriesSelect.splice(index, 1)
  }

  initForm()
  {
    this.jeuxVideoForm = this.formB.group(
      {
        name : ["Wow", Validators.required],
        editor : ["Blizzard"],
        dateSortie :  ["01/01/2004"],
        prix : ["1200", Validators.required],
        imageUrl : ["http://www.pngmart.com/files/4/World-of-Warcraft-PNG-Transparent-Picture.png", Validators.required]
      }
    )
  }


    onSubmit()
    {
      this.jeuxVideoForm.value.listCateg = this.categoriesSelect
      this.jeuxVideoForm.value.dispo = true;
      let data = this.jeuxVideoForm.value

      this.crud.create(data)

      //this.jeuxVideoForm.reset()
      //this.categoriesSelect = []
    }
  



}
