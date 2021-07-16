import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';

import { map } from 'rxjs/operators'
import { Token, User } from "../base-model/model";
import { AuthToken } from "../services/authToken";
import { BaseService } from "../services/base_service";
import { HttpSettingsService } from "../services/httpServiceSettings";
import { SessionService } from "../services/SessionService";


@Injectable({
    providedIn: 'root',
})
export class AuthService extends BaseService {
    exampleUser: User = new User(
        "jimmy", "jimmy", "jimmy12@gmail.com", "asante$4")

    public _basePath = 'api/token/';
    private timer?: Subscription;
    private _user = new BehaviorSubject<User>(this.exampleUser);

    constructor(public http: HttpClient,
                public _httpSettings: HttpSettingsService,
                public _sesstionService: SessionService,
                private _authToken: AuthToken
    ) {
        super(http, _httpSettings);
    }


    public login(data: Object): Observable<any>{
        return this.http.post<Token>(this.getUrl(), data, this._httpSettings.getHeaders()).pipe(
            map(res => {
                this._authToken.setToken(res)
                this._sesstionService.setUser(this.exampleUser)
                this._sesstionService.actionLoggedIn();
                return res
            })
        )
    }

    public logout() {
        this._authToken.clearToken();
        this._sesstionService.logout();
        return this.http.post('http://127.0.0.1:8000/' + 'accounts/logout/',{})
    }

    private getTokenRemainingTime() {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
          return 0;
        }
        const jwtToken = JSON.parse(atob(accessToken.split('.')[1]));
        const expires = new Date(jwtToken.exp * 1000);
        return expires.getTime() - Date.now();
      }
    
}
