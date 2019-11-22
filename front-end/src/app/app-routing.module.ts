import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/auth/auth.guard';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'homepage', component: HomepageComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
