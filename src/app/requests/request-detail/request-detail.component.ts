import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {Store} from '@ngrx/store';
import {FillIn} from '../../_models/fill-in';
import {ActivatedRoute, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import * as FillInsActions from '../../store/actions/fill-in.actions';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  id: number;
  fillIn: FillIn;
  fillIn2: FillIn;
  date;
  constructor(
    private store: Store<{fillIns: {fillIns: FillIn[]}}>,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map(params => {
          return +params.id;
        }),
        switchMap(id => {
          this.id = id;
          return this.store.select('fillIns');
        }),
        map(fillInsState => {
          return fillInsState.fillIns.find((recipe, index) => {
            return recipe.id === this.id;
          });
        })
      )
      .subscribe(fillIn => {
        this.fillIn = fillIn;
        this.date = moment(this.fillIn.startDate).format('D MMMM');
      });
  }

  do() {
    const jn = {
      id: this.fillIn.id,
      vergadering: this.fillIn.vergadering,
      accepted: true,
      fillInRequesterId: this.fillIn.fillInRequesterId
    };

    this.store.dispatch(new FillInsActions.UpdateDb(jn));
    this.router.navigate(['/requests']);
  }

}
