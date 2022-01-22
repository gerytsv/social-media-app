import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LikesComponent } from './likes/likes.component';
import { ConformationDialogBoxComponent } from './conformation-dialog-box/conformation-dialog-box.component';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
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
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    InfiniteScrollModule,
    RouterModule,
  ],
  exports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ConformationDialogBoxComponent,
    MinimizedUserComponent,
    LikesComponent,
    SnowflakesComponent,
    InfiniteScrollModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class SharedModule {}
