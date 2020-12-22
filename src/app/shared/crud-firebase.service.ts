import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudFirebaseService {

  constructor(private firestore : AngularFirestore) { }

  gets()
  {
    return this.firestore.collection("ListJeuxVideoLatest").snapshotChanges()
  }

  get(gameId)
  {
    return this.firestore.collection("ListJeuxVideoLatest").doc(gameId).get()
  }

  create(data : any)
  {
    this.firestore.collection("ListJeuxVideoLatest").add(data).then(
      (res) => { console.log("JeuxVideo bien créé") },
      (err) => { console.log("JeuxVideo mal créé") }
    )
  }

  desactivateGame(game : any)
  {
    this.firestore.collection("ListJeuxVideoLatest").doc(game.payload.doc.id).set(
      { dispo : false },
      { merge : true }
    )
  }

  deleteOne(game : any)
  {
      this.firestore.collection("ListJeuxVideoLatest").doc(game.payload.doc.id).delete()
  }

  deleteAll()
  {
    if(confirm("Voulez-vous tout supprimer ?")){
      return new Promise(
        (resolve, reject) => {
          this.firestore.collection("ListJeuxVideoLatest").snapshotChanges().subscribe(
            (resData) => { resolve(resData)},
            () => { reject() }
          )
        }
      )
    }
  }
}
