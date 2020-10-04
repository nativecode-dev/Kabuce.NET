import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard, AuthHttpInterceptor, AuthModule} from "@auth0/auth0-angular";

import {ApiModule} from "./api/api.module";
import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {AccountComponent} from './pages/account/account.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AppConfigService} from "./services/app-config.service";
import {environment} from '../environments/environment';
import {RegisterComponent} from './pages/register/register.component';
import {PricingComponent} from './pages/pricing/pricing.component';
import {SupportComponent} from './pages/support/support.component';
import {UserComponent} from './components/user/user.component';
import {OrganizationComponent} from './pages/organization/organization.component'

const CONFIG_ROUTES: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'account', component: AccountComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent},
  {path: 'organization', component: OrganizationComponent, canActivate: [AuthGuard]},
  {path: 'pricing', component: PricingComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'support', component: SupportComponent},
]

// noinspection SpellCheckingInspection
@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    DashboardComponent,
    HomeComponent,
    RegisterComponent,
    PricingComponent,
    SupportComponent,
    UserComponent,
    OrganizationComponent,
  ],
  imports: [
    BrowserModule.withServerTransition(environment.browser),
    AuthModule.forRoot(environment.auth),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(CONFIG_ROUTES),
    ApiModule.forRoot({rootUrl: ''})
  ],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: (config: AppConfigService) => () => config.load(),
      deps: [AppConfigService],
      multi: true
    },
    {provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
