import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthGuard } from '../common/auth/auth.guard';

import { AuthService } from './services/auth.service';

import { NotificatorService } from './services/notificator.service';

import { StorageService } from './services/storage.service';

@NgModule({
    declarations: [],
    imports: [],
    providers: [
      AuthGuard,
      AuthService,
      NotificatorService,
      StorageService,
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
