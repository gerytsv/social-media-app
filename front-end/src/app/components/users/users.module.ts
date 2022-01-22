import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { ProfileInfoComponent } from './profile-info/profile.component';
import { UsersDataService } from './users-data.service';
import { UpdateProfileComponent } from './profile-info/update-profile/update-profile.component';
import { FollowsComponent } from './profile-info/follows/follows.component';
import { SharedModule } from '../../shared/shared.module';
import { UserPostsComponent } from '../user-posts/user-posts.component';
import { PostsModule } from '../../post/posts.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    ProfileInfoComponent,
    UpdateProfileComponent,
    UserPostsComponent,
    RegisterComponent,
    LoginComponent,
    FollowsComponent,
  ],
  imports: [SharedModule, UsersRoutingModule, PostsModule],
  providers: [UsersDataService],
  exports: [
    ProfileInfoComponent,
    UpdateProfileComponent,
    UserPostsComponent,
    RegisterComponent,
    LoginComponent,
  ],
})
export class UsersModule {}
