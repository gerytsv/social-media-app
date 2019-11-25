import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { CoreModule } from "./core/core.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ToastrModule } from "ngx-toastr";
import { JwtModule } from "@auth0/angular-jwt";
import { TokenInterceptorService } from "./common/auth/token-interceptor.service";
import { LoginComponent } from "./components/users/login/login.component";
import { AppRoutingModule } from "./app-routing.module";
import { RegisterComponent } from "./components/users/register/register.component";
import { UsersModule } from "./components/users/users.module";
import { CommonModule } from "@angular/common";
import { NavComponent } from "./components/nav/nav.component";
import { SearchComponent } from "./components/nav/search/search.component";
import { HomepageComponent } from "./components/homepage/homepage.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    SearchComponent,
    HomepageComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    UsersModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: "toast-top-right",
      preventDuplicates: true,
      countDuplicates: true
    }),
    JwtModule.forRoot({ config: {} })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
