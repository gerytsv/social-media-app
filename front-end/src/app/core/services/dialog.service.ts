import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ConformationDialogBoxComponent } from '../../shared/conformation-dialog-box/conformation-dialog-box.component';

@Injectable()
export class DialogService {

  constructor(private readonly dialog: MatDialog) {}


  public openConfDialog(component: any, data: any ) {
    this.dialog.closeAll();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'my-class';

    return this.dialog.open(component, dialogConfig);
    }
}
