import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material/app-material.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  exports: [LoginFormComponent]
})
export class ComponentsModule { }
