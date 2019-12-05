import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CreatePostComponent } from "./create-post/create-post.component";

const routes: Routes = [
  {
    path: "create",
    component: CreatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
