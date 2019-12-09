import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { PostDetailPreviewComponent } from '../../post/post-detail-preview/post-detail-preview.component';

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(private readonly dialog: MatDialog) {}

  public openConfDialog(component: any, data: any) {
    this.dialog.closeAll();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'my-class';

    return this.dialog.open(component, dialogConfig);
  }

  public openPostPreview(data) {
    this.dialog.closeAll();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data;
    dialogConfig.disableClose = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'my-class';
    dialogConfig.position = {
      top: '0',
      left: '0',
      bottom: '0',
      right: '0'
    };

    this.dialog.open(PostDetailPreviewComponent, dialogConfig);
  }
}
