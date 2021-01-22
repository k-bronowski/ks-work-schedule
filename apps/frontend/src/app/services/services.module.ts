import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiClientService } from './api-client.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiClientService]
})
export class ServicesModule { }
