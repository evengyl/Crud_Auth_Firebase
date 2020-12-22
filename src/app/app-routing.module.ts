import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { JeuxVideoMainComponent } from './components/jeux-video-main/jeux-video-main.component';
import { JeuxvideoDetailsComponent } from './components/jeuxvideo-details/jeuxvideo-details.component';
import { JeuxvideoListComponent } from './components/jeuxvideo-list/jeuxvideo-list.component';
import { JeuxvideoComponent } from './components/jeuxvideo/jeuxvideo.component';
import { AuthGuardGuard } from './shared/auth-guard.guard';

const routes: Routes = [
  {path : "", component : AuthComponent},
  {path : "createAccount", component : CreateAccountComponent},
  {path : "jeuxvideo", component : JeuxVideoMainComponent, canActivate : [AuthGuardGuard]},
  {path : "jeuxvideoDetails/:id", component : JeuxvideoDetailsComponent, canActivate : [AuthGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
