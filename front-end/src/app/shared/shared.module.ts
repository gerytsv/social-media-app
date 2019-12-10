import { LikesComponent } from './likes/likes.component';
import { MinimizedUserModule } from './minimized-user/minimized-user.module';
import { ConformationDialogBoxComponent } from './conformation-dialog-box/conformation-dialog-box.component';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [ConformationDialogBoxComponent, LikesComponent],
  imports: [MinimizedUserModule, MatDialogModule],
  exports: [
    MinimizedUserModule,
    ConformationDialogBoxComponent,
    LikesComponent,
  ],
})
export class SharedModule {}
