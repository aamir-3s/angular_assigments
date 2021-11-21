import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsComponent } from './details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AssigmentService } from 'src/app/service/assigment.service';
import { DetailsRoutingModule } from './details-routing.module';
import { AppMaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    DetailsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    DetailsRoutingModule,
    AppMaterialModule
  ],
  providers: [AssigmentService],
  bootstrap: [DetailsComponent]
})
export class DetailsModule { }
