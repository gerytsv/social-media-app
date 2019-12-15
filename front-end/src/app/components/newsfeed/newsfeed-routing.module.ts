import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NewsfeedComponent } from './newsfeed.component';
import { NewsfeedResolver } from '../../core/resolvers/newsfeed.resolver';

const routes: Routes = [
  {
    path: '',
    component: NewsfeedComponent,
    pathMatch: 'full',
    resolve: { posts: NewsfeedResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsfeedRoutingModule {}
