import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DialogService } from 'primeng/dynamicdialog';
import { PrimengModule } from './primeng/primeng.module';

@NgModule({
  declarations: [],
  providers: [DialogService],
  imports: [PrimengModule],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    PrimengModule,
  ],
})
export class ComponentModule {}
