import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenInterceptorService } from './common/auth/token-interceptor.service';
import { ServerErrorInterceptor } from './common/exceptons/server-error';
import { HomepageModule } from './components/homepage/homepage.module';
import { NavigationPaneModule } from './components/nav/nav.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
// import { NgxSpinnerModule } from 'ngx-spinner';
import { ServerErrorComponent } from './components/server-error/server-error.component';
import { UsersModule } from './components/users/users.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, ServerErrorComponent],
  imports: [
    // NgxSpinnerModule,
    SharedModule,
    CoreModule,
    NavigationPaneModule,
    AppRoutingModule,
    HomepageModule,
    UsersModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      countDuplicates: true,
    }),
    JwtModule.forRoot({ config: {} }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
