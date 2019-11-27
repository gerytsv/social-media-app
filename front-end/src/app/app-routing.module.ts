import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./common/auth/auth.guard";
import { NewsfeedComponent } from "./post/newsfeed/newsfeed.component";
import { NewsfeedResolver } from "./core/resolvers/newsfeed.resolver";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () =>
      import("./post/newsfeed/newsfeed.module").then(m => m.NewsfeedModule)
  },
  {
    path: "explore",
    loadChildren: () =>
      import("./post/explore/explore.module").then(m => m.ExploreModule)
  },
  {
    path: "users",
    canActivate: [AuthGuard],
    loadChildren: () =>
      import("./components/users/users.module").then(m => m.UsersModule)
  },
  {
    path: "homepage",
    component: HomepageComponent
  },

  { path: "not-found", component: NotFoundComponent },

  { path: "**", redirectTo: "/not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
