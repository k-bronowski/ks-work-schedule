import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccesTokenResolver } from '../acces-token.resolver';
import { AuthGuard } from '../auth.guard';
import { UserProfileResolver } from '../user-profile.resolver';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { IndexViewComponent } from './index-view/index-view.component';
import { LoginViewComponent } from './login-view/login-view.component';

const routes: Routes = [
  { path: 'login', component: LoginViewComponent },
  {
    path: '',
    canActivate: [AuthGuard],
    resolve: { accessToken: AccesTokenResolver, userProfile: UserProfileResolver },
    component: IndexViewComponent,
    children: [
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
