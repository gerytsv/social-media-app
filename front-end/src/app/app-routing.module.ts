import { ServerErrorComponent } from './components/server-error/server-error.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/auth/auth.guard';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdminGuard } from './common/auth/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {
    path: 'home',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./../app/components/newsfeed/newsfeed.module').then(
        (m) => m.NewsfeedModule
      ),
  },
  {
    path: 'explore',
    loadChildren: () =>
      import('./../app/components/explore/explore.module').then(
        (m) => m.ExploreModule
      ),
  },
  {
    path: 'admin',
    canActivate: [AuthGuard, AdminGuard],
    loadChildren: () =>
      import('./../app/components/admin-history/admin-history.module').then(
        (m) => m.AdminHistoryModule
      ),
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./components/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'homepage',
    loadChildren: () =>
      import('./../app/components/homepage/homepage.module').then(
        (m) => m.HomepageModule
      ),
  },
  {
    path: 'posts',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./../app/post/posts.module').then((m) => m.PostsModule),
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'server-error', component: ServerErrorComponent },

  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
