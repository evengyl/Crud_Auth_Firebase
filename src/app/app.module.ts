import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'


//compo
import { JeuxvideoComponent } from './components/jeuxvideo/jeuxvideo.component'
import { JeuxvideoListComponent } from './components/jeuxvideo-list/jeuxvideo-list.component'
import { AuthComponent } from './components/auth/auth.component'

//services
import { AuthFirebaseService } from './shared/auth-firebase.service'
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { ReactiveFormsModule } from '@angular/forms'
import { environment } from 'src/environments/environment';
import { JeuxVideoMainComponent } from './components/jeux-video-main/jeux-video-main.component';
import { CreateAccountComponent } from './components/create-account/create-account.component'
import { CrudFirebaseService } from './shared/crud-firebase.service';
import { JeuxvideoDetailsComponent } from './components/jeuxvideo-details/jeuxvideo-details.component'


@NgModule({
  declarations: [
    AppComponent,
    JeuxvideoComponent,
    JeuxvideoListComponent,
    AuthComponent,
    JeuxVideoMainComponent,
    CreateAccountComponent,
    JeuxvideoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    AuthFirebaseService,
    CrudFirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
