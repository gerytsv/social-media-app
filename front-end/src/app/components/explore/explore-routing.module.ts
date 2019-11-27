import { ExploreComponent } from "./explore.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AllPostsResolver } from "../../core/resolvers/all-posts.resolver";
import { PostDetailPreviewComponent } from "../../post/post-detail-preview/post-detail-preview.component";
import { SinglePostResolver } from "../../core/resolvers/single-post.resolver";

const routes: Routes = [
  {
    path: "posts",
    component: ExploreComponent,
    pathMatch: "full",
    resolve: { posts: AllPostsResolver }
  },
  {
    path: "posts/:id",
    component: PostDetailPreviewComponent,
    resolve: { post: SinglePostResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule {}
