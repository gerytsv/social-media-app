import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LikesComponent } from './likes/likes.component';
import { ConformationDialogBoxComponent } from './conformation-dialog-box/conformation-dialog-box.component';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MinimizedUserComponent } from './minimized-user/minimized-user.component';
import { RouterModule } from '@angular/router';
import { SnowflakesComponent } from './snowflakes/snowflakes.component';

@NgModule({
  declarations: [
    ConformationDialogBoxComponent,
    LikesComponent,
    MinimizedUserComponent,
    SnowflakesComponent,
  ],
  imports: [
    MatDialogModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    RouterModule,
  ],
  exports: [
    FormsModule,
    ConformationDialogBoxComponent,
    MinimizedUserComponent,
    LikesComponent,
    SnowflakesComponent,
    InfiniteScrollModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
