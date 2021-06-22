import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { AuthToken } from './services/authToken';
import { HttpSettingsService } from './services/httpServiceSettings';
import { SettingsService } from './services/SettingsService';
import { SessionService } from './services/SessionService';
import { AccountsComponent } from './accounts/accounts.component';
import { ProfileComponent } from './profile/profile.component';
import { BaseService } from './services/base_service';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AccountsComponent,
    ProfileComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule, 
  ],
  providers: [AuthToken, AuthService, HttpSettingsService,
    SessionService, SettingsService, BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
