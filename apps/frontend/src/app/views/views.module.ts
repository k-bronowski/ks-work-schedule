import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsRoutingModule } from './views-routing.module';
import { LoginViewComponent } from './login-view/login-view.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { ComponentsModule } from '../components/components.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [LoginViewComponent, CalendarViewComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    ComponentsModule,
    FlexLayoutModule
  ]
})
export class ViewsModule { }
