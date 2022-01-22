import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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

    this.dialog.open(PostDetailPreviewComponent, dialogConfig);
  }
}
