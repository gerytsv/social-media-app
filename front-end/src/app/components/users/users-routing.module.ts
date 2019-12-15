import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileInfoComponent } from './profile-info/profile.component';

const routes: Routes = [{ path: ':username', component: ProfileInfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
