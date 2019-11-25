import { ExploreComponent } from "./explore.component";
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AllPostsResolver } from "../core/resolvers/all-posts.resolver";

const routes: Routes = [
  {
    path: "",
    component: ExploreComponent,
    pathMatch: "full",
    resolve: { posts: AllPostsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreRoutingModule {}
