import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {AuthConfig, AuthModule} from "@auth0/auth0-angular";

import {AppComponent} from './app.component';
import {NavMenuComponent} from './nav-menu/nav-menu.component';
import {HomeComponent} from './home/home.component';
import {CounterComponent} from './counter/counter.component';
import {FetchDataComponent} from './fetch-data/fetch-data.component';
import {AuthComponent} from "./account/auth.component";

const CONFIG_AUTH: AuthConfig = {
  clientId: 'wJIoxT5xfrFIcXqVn38jLG5Vhi40gWV1',
  domain: 'dev-acljxp0j.auth0.com',
}

const CONFIG_BROWSER = {
  appId: 'kabuce'
}

const CONFIG_ROUTES: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'counter', component: CounterComponent},
  {path: 'fetch-data', component: FetchDataComponent},
]

// noinspection SpellCheckingInspection
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CounterComponent,
    FetchDataComponent,
    HomeComponent,
    NavMenuComponent,
  ],
  imports: [
    BrowserModule.withServerTransition(CONFIG_BROWSER),
    // AuthModule.forRoot(CONFIG_AUTH),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(CONFIG_ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
