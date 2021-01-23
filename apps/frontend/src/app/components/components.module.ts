import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material/app-material.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';



@NgModule({
  declarations: [LoginFormComponent, UsersListComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  exports: [LoginFormComponent, UsersListComponent]
})
export class ComponentsModule { }
