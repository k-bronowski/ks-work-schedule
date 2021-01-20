import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { LoginViewComponent } from './login-view/login-view.component';

const routes: Routes = [
  { path: 'login', component: LoginViewComponent },
  { path: '', component: CalendarViewComponent },
  { path: '**', redirectTo: '/' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
