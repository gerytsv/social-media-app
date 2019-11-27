import { AllPostsResolver } from './resolvers/all-posts.resolver';
import { NewsfeedResolver } from './resolvers/newsfeed.resolver';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthGuard } from '../common/auth/auth.guard';
import { AuthService } from './services/auth.service';
import { NotificatorService } from './services/notificator.service';
import { StorageService } from './services/storage.service';
import { SearchService } from './services/search.service';
import { DialogService } from './services/dialog.service';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    AuthGuard,
    AuthService,
    NotificatorService,
    StorageService,
    NewsfeedResolver,
    AllPostsResolver,
    SearchService,
    DialogService
  ],
  exports: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error(`CoreModule has already been initialized!`);
    }
  }
}
