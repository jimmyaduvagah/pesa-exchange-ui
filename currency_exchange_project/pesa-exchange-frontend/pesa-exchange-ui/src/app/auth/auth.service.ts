import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs';
import { map, tap, delay, finalize } from 'rxjs/operators';

import { LoginUser, Token, User } from "../base-model/model";
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

    public _basePath = 'api/v1/token/obtain/';
    private timer?: Subscription;
    private userSubject: BehaviorSubject<LoginUser>;
    public user: Observable<LoginUser>;

    constructor(public http: HttpClient, public router: Router,
        public _httpSettings: HttpSettingsService,
        public _sesstionService: SessionService,
        private _authToken: AuthToken
    ) {
        super(http, _httpSettings);
        this.userSubject = new BehaviorSubject<LoginUser>(null);
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): LoginUser {
        return this.userSubject.value;
    }

    public login(data: Object): Observable<any> {
        return this.http.post<LoginUser>(this.getUrl(), data, this._httpSettings.getHeaders()).pipe(
            map(user => {
                this.userSubject.next(user);
                console.log(this.userValue)
                // this._authToken.setToken(user)
                // this._sesstionService.setUser(this.exampleUser)
                this._sesstionService.actionLoggedIn();
                return user
            })
        )
    }

    public setUser(): Observable<any> {
        return this.http.get(this._httpSettings.getBaseUrl() + 'api/v1/users/', this._httpSettings.getHeaders()).pipe(
            map(res => {
                console.log(res)
            })
        )
    }

    // refreshToken() {
    //     const refreshToken = localStorage.getItem('refresh-token');
    //     if (!refreshToken) {
    //         this._authToken.clearToken();
    //         return of(null);
    //     }
    //     let user = 
    //     return this.http
    //         .post<Token>(this._basePath + 'refresh/', { userValue().refreshToken})
    //         .pipe(
    //             map((x) => {
    //                 console.log('refresh Token')
                    
    //                 this._authToken.clearToken();
    //                 this._authToken.setToken(x);
    //                 this.startTokenTimer();
    //                 return x;
    //             })
    //         );
    // }

    public logout() {
        // this._authToken.clearToken();
        // this._sesstionService.logout();
        this.stopRefreshTokenTimer();
        this.userSubject.next(null);
        return this.router.navigate(['/login']);
    }

    public getTokenRemainingTime() {
        const accessToken = localStorage.getItem('access-token');
        if (!accessToken) {
            return 0;}
        const jwtToken = JSON.parse(atob(accessToken.split('.')[1]));
        const expires = new Date(jwtToken.exp * 1000);
        return expires.getTime() - Date.now();
    }

    private startTokenTimer() {
        const timeout = this.getTokenRemainingTime();
        this.timer = of(true)
            .pipe(
                delay(timeout),
                tap(() => this.refreshToken().subscribe())
            )
            .subscribe();
    }

    private stopTokenTimer() {
        this.timer?.unsubscribe();
    }

    refreshToken() {
        let refreshToken = this.userValue.refresh
        return this.http.post<Token>(this._basePath + 'refresh/', {'refresh': refreshToken })
            .pipe(map((res) => {
                this.userValue.refresh =res.refresh;
                this.userValue.access =res.access;
                this.startRefreshTokenTimer();
                return res;
            }));
    }

    // helper methods

    private refreshTokenTimeout;

    private startRefreshTokenTimer() {
        // parse json object from base64 encoded jwt token
        const jwtToken = JSON.parse(atob(this.userValue.access.split('.')[1]));

        // set a timeout to refresh the token a minute before it expires
        const expires = new Date(jwtToken.exp * 1000);
        const timeout = expires.getTime() - Date.now() - (60 * 1000);
        this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
    }

    private stopRefreshTokenTimer() {
        clearTimeout(this.refreshTokenTimeout);
    }
}


// const secondsCounter = interval(60000); //Refreshes every 10 minutes
//  secondsCounter
//  .pipe(
//    tap(console.log),
//    takeWhile(x => this.notificationService.isLoggedIn()),
//    flatMap(() => this.notificationService.getNotifications(this.token))
//  ).subscribe()

// import { Component, Input, OnDestroy,  OnInit, Output } from "@angular/core";
// import { HttpClient } from '@angular/common/http';
// import { of, Subscription, timer } from "rxjs";
// import { catchError, filter, switchMap } from "rxjs/operators";

// @Component({
//   selector: "app-data-emitter",
//   templateUrl: "./data-emitter.component.html",
//   styleUrls: ["./data-emitter.component.css"]
// })
// export class DataEmitterComponent implements OnInit, OnDestroy {
//   @Output() data: any;
//   @Input() apiUrl: any;
//   @Input() intervalPeriod: number;

//   minutes: number;
//   subscription: Subscription;

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.minutes = this.intervalPeriod * 60 * 1000;

//     this.subscription = timer(0, this.minutes)
//       .pipe(
//         switchMap(() => {
//           return this.getData()
//             .pipe(catchError(err => {
//               // Handle errors
//               console.error(err);
//               return of(undefined);
//             }));
//         }),
//         filter(data => data !== undefined)
//       )
//       .subscribe(data => {
//         this.data = data;
//         console.log(this.data);
//       });
//   }

//   ngOnDestroy() {
//     this.subscription.unsubscribe();
//   }

//   getData() {
//     return this.http
//       .get(this.apiUrl);
//   }
// }
