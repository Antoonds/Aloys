import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store';
import {fillInReducer} from './store/reducers/fill-in.reducers';
import { HomeComponent } from './home/home.component';
import {EffectsModule} from '@ngrx/effects';
import { FillInEffects } from './store/effects/fill-in.effects';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RequestsComponent } from './requests/requests.component';
import { RequestListComponent } from './requests/request-list/request-list.component';
import { RequestDetailComponent } from './requests/request-detail/request-detail.component';
import {DatePipe} from './pipes/date.pipe';
import {AuthComponent} from './auth/auth.component';
import {FormsModule} from '@angular/forms';
import {JwtInterceptor} from './_interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    RequestsComponent,
    RequestListComponent,
    RequestDetailComponent,
    AuthComponent,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({fillIns: fillInReducer}),
    EffectsModule.forRoot([FillInEffects]),
    NgbModule,
    FormsModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
