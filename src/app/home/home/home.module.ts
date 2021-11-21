import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssigmentService } from 'src/app/service/assigment.service';
import { HomeRoutingModule } from './home-routing.module';
import { materialize } from 'rxjs/operators';
import { AppMaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ],
  providers: [AssigmentService],
  bootstrap: [HomeComponent]
})

export class HomeModule { }
