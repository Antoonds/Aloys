import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {FillIn} from '../_models/fill-in';

import * as FillInsActions from '../store/actions/fill-in.actions';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fillIns: Observable<{fillIns: FillIn[]}>;

  constructor(private store: Store<{ fillIns: { fillIns: FillIn[] } }>) {
    this.fillIns = this.store.select('fillIns');
  }

  ngOnInit(): void {
    this.store.dispatch(new FillInsActions.FetchFillIns());
  }

  do(){

  }
}
