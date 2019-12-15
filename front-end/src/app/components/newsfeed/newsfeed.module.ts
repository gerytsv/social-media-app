import { NgxSpinnerModule } from 'ngx-spinner';
import { NewsfeedResolver } from './../../core/resolvers/newsfeed.resolver';
import { NewsfeedRoutingModule } from './newsfeed-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsfeedComponent } from './newsfeed.component';
import { PostsModule } from '../../post/posts.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [NewsfeedComponent],
  imports: [
    CommonModule,
    NewsfeedRoutingModule,
    PostsModule,
    SharedModule,
    NgxSpinnerModule,
  ],
  providers: [NewsfeedResolver],
  exports: [],
})
export class NewsfeedModule {}
