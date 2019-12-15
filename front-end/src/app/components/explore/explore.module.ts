import { AllPostsResolver } from '../../core/resolvers/all-posts.resolver';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExploreComponent } from './explore.component';
import { ExploreRoutingModule } from './explore-routing.module';
import { PostsModule } from '../../post/posts.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ExploreComponent],
  imports: [CommonModule, ExploreRoutingModule, PostsModule, SharedModule],
  providers: [AllPostsResolver],
  exports: [],
})
export class ExploreModule {}
