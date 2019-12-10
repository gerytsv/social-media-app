import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { ProfileInfoComponent } from './profile-info/profile.component';
import { UsersDataService } from './users-data.service';
import { UpdateProfileComponent } from './profile-info/update-profile/update-profile.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FollowsComponent } from './profile-info/follows/follows.component';
import { SharedModule } from '../../shared/shared.module';
import { UserPostsComponent } from '../user-posts/user-posts.component';
import { PostsModule } from '../../post/posts.module';


@NgModule({
  declarations: [ProfileInfoComponent, UpdateProfileComponent, FollowsComponent, UserPostsComponent],
  imports: [
   SharedModule, UsersRoutingModule, FormsModule, CommonModule, PostsModule
  ],
  providers: [UsersDataService],
  exports: [ProfileInfoComponent, UpdateProfileComponent, UserPostsComponent]
})
export class UsersModule { }
