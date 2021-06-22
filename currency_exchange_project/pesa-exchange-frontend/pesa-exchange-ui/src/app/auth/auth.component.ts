import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/SessionService';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';


@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
	public username: any;
	public password: any;
	public isAuthenticated: boolean = false;

	constructor(private authService: AuthService,
		private _sessionService: SessionService, public router: Router
	) {
		if (typeof this._sessionService.user !== 'undefined') {
			this.isAuthenticated = this._sessionService.isLoggedIn();
		} else {
			this._sessionService.userObservable.subscribe((res) => {
				this.isAuthenticated = this._sessionService.isLoggedIn();
			});
		}
	}
	ngOnInit(): void {
	}



	signIn() {
		this.authService.login(JSON.stringify(
			{ "username": this.username, "password": this.password })).subscribe();
	}

	signOut() {
		this.authService.logout().subscribe();
	}
}