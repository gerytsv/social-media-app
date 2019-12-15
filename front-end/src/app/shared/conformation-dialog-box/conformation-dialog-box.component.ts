import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DialogService } from '../../core/services/dialog.service';
import { AuthService } from '../../core/services/auth.service';
import { StorageService } from '../../core/services/storage.service';

@Component({
  selector: 'app-conformation-dialog-box',
  templateUrl: './conformation-dialog-box.component.html',
  styleUrls: ['./conformation-dialog-box.component.css'],
})
export class ConformationDialogBoxComponent implements OnInit {
  public description: string;
  public function: any;

  constructor(
    public dialogRef: MatDialogRef<ConformationDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private readonly dialog: DialogService,
    private readonly authService: AuthService,
    private readonly localstorage: StorageService
  ) {}

  ngOnInit() {
    this.description = this.data.description;
    this.function = this.data.function;
  }

  public confirm() {
    this.dialogRef.close('true');
  }

  public cancel() {
    this.dialogRef.close();
  }
}
