import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RequestsComponent} from './requests/requests.component';
import {RequestListComponent} from './requests/request-list/request-list.component';
import {RequestDetailComponent} from './requests/request-detail/request-detail.component';
import {RequestsResolverService} from './requests/requests-resolver.service';
import {AuthComponent} from './auth/auth.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'requests', component: RequestsComponent, children: [
      {path: 'request-list', component: RequestListComponent},
      {path: ':id', component: RequestDetailComponent, resolve: [RequestsResolverService]}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
