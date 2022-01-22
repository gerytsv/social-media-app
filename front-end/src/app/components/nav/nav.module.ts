import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExploreRoutingModule } from '../explore/explore-routing.module';
import { NavComponent } from './nav.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [NavComponent, SearchComponent],
  imports: [ExploreRoutingModule, SharedModule],
  providers: [],
  exports: [NavComponent, SearchComponent],
})
export class NavigationPaneModule {}
