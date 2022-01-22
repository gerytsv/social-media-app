import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExploreRoutingModule } from '../explore/explore-routing.module';
import { UsersModule } from '../users/users.module';
import { HomepageComponent } from './homepage.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [UsersModule, ExploreRoutingModule, SharedModule],
  providers: [],
  exports: [HomepageComponent],
})
export class HomepageModule {}
