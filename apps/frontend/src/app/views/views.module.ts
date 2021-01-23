import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { LoginViewComponent } from './login-view/login-view.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { ComponentsModule } from '../components/components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IndexViewComponent } from './index-view/index-view.component';
import { ServerErrorViewComponent } from './server-error-view/server-error-view.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { UsersViewComponent } from './users-view/users-view.component';
import { EditViewComponent } from './edit-view/edit-view.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { UserService } from '../services/user.service';


@NgModule({
  declarations: [
    LoginViewComponent,
    CalendarViewComponent,
    IndexViewComponent,
    ServerErrorViewComponent,
    UsersViewComponent,
    EditViewComponent,
    ProfileViewComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    ComponentsModule,
    FlexLayoutModule,
    AppMaterialModule
  ],
  providers: [UserService]
})
export class ViewsModule { }
