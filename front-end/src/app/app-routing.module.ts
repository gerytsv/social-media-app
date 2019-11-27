import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/auth/auth.guard';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { NewsfeedResolver } from './core/resolvers/newsfeed.resolver';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./../app/newsfeed/newsfeed.module').then(m => m.NewsfeedModule)
  },
  {
    path: 'explore',
    loadChildren: () =>
      import('./../app/explore/explore.module').then(m => m.ExploreModule)
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./../app/components/admin-history/admin-history.module').then(m => m.AdminHistoryModule)
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./components/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'homepage',
    component: HomepageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
