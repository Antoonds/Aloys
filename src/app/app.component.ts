import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as FillInsActions from './store/actions/fill-in.actions';
import {AccountService} from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'aloys';

  constructor(private auth: AccountService) {}

  ngOnInit(): void {
    this.auth.autoLogin();
  }
}
