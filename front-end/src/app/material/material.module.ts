import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatListModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatTabsModule,
  MatSidenavModule,
  MatIconModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
  ],
  exports: [
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
  ],
})
export class MaterialModule {
  constructor(@Optional() @SkipSelf() parent: MaterialModule) {
    if (parent) {
      throw new Error(`MaterialModule has already been initialized!`);
    }
  }
}
