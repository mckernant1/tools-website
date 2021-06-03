import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiffComponent } from './diff/diff.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    DiffComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class ToolsModule { }
