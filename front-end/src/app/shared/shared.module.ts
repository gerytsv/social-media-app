import { MinimizedUserModule } from './minimized-user/minimized-user.module';
import { ConformationDialogBoxComponent } from './conformation-dialog-box/conformation-dialog-box.component';
import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { MatDialogModule } from '@angular/material';

@NgModule({
    declarations: [ConformationDialogBoxComponent],
    imports: [
        MinimizedUserModule, MatDialogModule,
    ],
    exports: [
     MinimizedUserModule, ConformationDialogBoxComponent],
  })
  export class SharedModule {}
