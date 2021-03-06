import {AuthService} from "@auth0/auth0-angular";
import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccountService} from "./api/services/account.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  readonly title: string = 'Kabuce';

  constructor(readonly auth: AuthService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  login() {
    return this.auth.loginWithRedirect({redirect_uri: window.location.href})
  }

  logout() {
    this.auth.logout({returnTo: window.location.origin})
  }
}
