import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'
import { AuthToken } from "../services/authToken";
import { BaseService } from "../services/base_service";
import { HttpSettingsService } from "../services/httpServiceSettings";
import { SessionService } from "../services/SessionService";


export interface Token {
    token: string;
    user: any;
  }


@Injectable()
export class AuthService extends BaseService {
    public _basePath = 'api-token-auth/';
    // public _basePath = 'api-token-auth/';

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
                let tkn = res.token;
                let user = res.user;
                this._authToken.setToken(tkn)
                this._sesstionService.setUser(user)
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
}
