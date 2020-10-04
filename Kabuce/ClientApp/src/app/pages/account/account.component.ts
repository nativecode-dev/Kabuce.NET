import {Component, OnInit} from '@angular/core';
import {AuthService} from "@auth0/auth0-angular";
import {ReplaySubject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {AccountService} from "../../api/services/account.service";

export interface IUser {
  email: string
  email_verified: boolean
  family_name: string
  given_name: string
  locale: string
  name: string
  nickname: string
  picture: string
  updated_at: string
}

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  private readonly users: ReplaySubject<IUser> = new ReplaySubject<IUser>()

  constructor(readonly auth: AuthService, readonly accounts: AccountService) {
  }

  ngOnInit(): void {
    this.auth.user$.subscribe(user => this.users.next(user))
  }

  do_stuff() {
    this.account.subscribe(res => console.log(res));
  }

  get account() {
    return this.accounts.apiAccountsGet()
  }

  get user() {
    return this.users
  }

}
