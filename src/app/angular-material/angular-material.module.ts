import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatButtonModule,MatCheckboxModule,MatInputModule,MatFormFieldModule,MatDatepickerModule,MatFormFieldModule
  ],
  exports: [CommonModule,MatButtonModule,MatCheckboxModule,MatInputModule,MatFormFieldModule,MatDatepickerModule,MatFormFieldModule]
})
export class AngularMaterialModule { }
