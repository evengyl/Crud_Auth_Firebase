import { Component, OnInit } from '@angular/core';
import { CrudFirebaseService } from 'src/app/shared/crud-firebase.service';

@Component({
  selector: 'app-jeuxvideo-list',
  templateUrl: './jeuxvideo-list.component.html'
})
export class JeuxvideoListComponent implements OnInit {

  listJeux = []
  constructor(private crud : CrudFirebaseService) { }

  ngOnInit(): void {
    this.crud.gets().subscribe(
      ( data ) => {
          this.listJeux = data
      }
    )
  }


  deleteGame(game : any)
  {
    this.crud.deleteOne(game)
  }



  deleteAll()
  {
    this.crud.deleteAll().then(
      (resData : any) => {
        for(let game of resData)
        {
          this.crud.deleteOne(game)
        }
      },
      () => { console.log("Une erreur est survenue lors du retour de promesse") }
    )
    .catch(
      () => { console.log("Une erreur est survenue lors du gets")}
    )
  }


  desactivateDispo(game : any)
  {
    this.crud.desactivateGame(game);
  }
}
