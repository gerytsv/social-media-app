import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExploreComponent } from "./explore.component";
import { ExploreRoutingModule } from "./explore-routing.module";

import { PostsModule } from "../../post/posts.module";
@NgModule({
  declarations: [ExploreComponent],
  imports: [CommonModule, ExploreRoutingModule, PostsModule],
  providers: [],
  exports: []
})
export class ExploreModule {}
