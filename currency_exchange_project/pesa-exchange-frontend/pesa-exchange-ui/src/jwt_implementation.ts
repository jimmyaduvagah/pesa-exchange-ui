  private timer: Subscription;
  private _user = new BehaviorSubject<ApplicationUser>(null);
  user$: Observable<ApplicationUser> = this._user.asObservable();