import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FillIn} from '../../_models/fill-in';
import {Store} from '@ngrx/store';
import * as FillInsActions from '../../store/actions/fill-in.actions';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  fillIns: Observable<{fillIns: FillIn[]}>;

  constructor(private store: Store<{ fillIns: { fillIns: FillIn[] } }>) {
    this.fillIns = this.store.select('fillIns');
  }

  ngOnInit(): void {
    this.store.dispatch(new FillInsActions.FetchFillIns());
  }


}
