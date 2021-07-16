import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthToken } from './authToken';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthToken) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.authService.getToken();

        if (token) {
            request = request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
        }
        return next.handle(request);
    }
}