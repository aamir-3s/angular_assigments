
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageRefService } from './service/local-storage-ref.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  
  ],
  providers: [LocalStorageRefService],
  bootstrap: [AppComponent]
})
export class AppModule { }
