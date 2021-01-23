import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesTokenResolver } from '../acces-token.resolver';
import { AuthGuard } from '../auth.guard';
import { UserProfileResolver } from '../user-profile.resolver';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { EditViewComponent } from './edit-view/edit-view.component';
import { IndexViewComponent } from './index-view/index-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ServerErrorViewComponent } from './server-error-view/server-error-view.component';
import { UsersViewComponent } from './users-view/users-view.component';

const routes: Routes = [
  { path: 'login', component: LoginViewComponent },
  { path: 'serverError', component: ServerErrorViewComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    resolve: { accessToken: AccesTokenResolver, userProfile: UserProfileResolver },
    component: IndexViewComponent,
    children: [
      { path: 'profile', component: ProfileViewComponent },
      { path: 'users', component: UsersViewComponent },
      { path: 'edit', component: EditViewComponent },
      { path: '', component: CalendarViewComponent }
    ]
  },
  { path: '**', redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
