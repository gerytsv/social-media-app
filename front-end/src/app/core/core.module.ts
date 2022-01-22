import { SinglePostResolver } from './resolvers/single-post.resolver';
import { AllPostsResolver } from './resolvers/all-posts.resolver';
import { NewsfeedResolver } from './resolvers/newsfeed.resolver';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthGuard } from '../common/auth/auth.guard';
import { AuthService } from './services/auth.service';
import { NotificatorService } from './services/notificator.service';
import { StorageService } from './services/storage.service';
import { SearchService } from './services/search.service';
import { DialogService } from './services/dialog.service';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { ExploreModule } from '../components/explore/explore.module';
import { AdminGuard } from '../common/auth/admin.guard';

@NgModule({
  declarations: [],
  imports: [ExploreModule],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } },
    AuthGuard,
    AdminGuard,
    AuthService,
    NotificatorService,
    StorageService,
    NewsfeedResolver,
    AllPostsResolver,
    SinglePostResolver,
    SearchService,
    DialogService,
  ],
  exports: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error(`CoreModule has already been initialized!`);
    }
  }
}
