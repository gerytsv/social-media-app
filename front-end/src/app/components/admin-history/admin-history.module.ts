import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHistoryComponent } from './admin-history.component';
import { AdminDataService } from './admin-data.service';
import { SingleHistoryPreviewComponent } from './single-history-preview/single-history-preview.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminHistoryComponent, SingleHistoryPreviewComponent],
  imports: [
    CommonModule, AdminRoutingModule
  ],
  providers: [AdminDataService]
})
export class AdminHistoryModule { }
