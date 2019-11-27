import { NewsfeedResolver } from "./../../core/resolvers/newsfeed.resolver";
import { NewsfeedRoutingModule } from "./newsfeed-routing.module";
import { CoreModule } from "../../core/core.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsfeedComponent } from "./newsfeed.component";
import { PostsModule } from "../posts.module";

@NgModule({
  declarations: [NewsfeedComponent],
  imports: [CommonModule, NewsfeedRoutingModule, PostsModule],
  providers: [NewsfeedResolver],
  exports: []
})
export class NewsfeedModule {}