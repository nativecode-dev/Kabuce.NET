import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class AppConfigService {
  constructor(private readonly client: HttpClient) {
  }

  public load() {
    return this.client.get('/assets/app-config.json')
  }
}
