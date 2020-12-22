import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudFirebaseService } from 'src/app/shared/crud-firebase.service';

@Component({
  selector: 'app-jeuxvideo-details',
  templateUrl: './jeuxvideo-details.component.html'
})
export class JeuxvideoDetailsComponent implements OnInit {

  detailsGame : any

  constructor(private crud : CrudFirebaseService, private acRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.crud.get(this.acRoute.snapshot.params.id).subscribe(
      ( res ) => { this.detailsGame = res.data()}
    )
  }

}
