import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinimizedUserComponent } from './minimized-user.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MinimizedUserComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [MinimizedUserComponent]
})
export class MinimizedUserModule { }
