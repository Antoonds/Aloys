import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {FillIn} from '../_models/fill-in';
import {Store} from '@ngrx/store';
import {map, switchMap, take} from 'rxjs/operators';
import * as FillInsActions from '../store/actions/fill-in.actions';
import {Actions, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsResolverService implements Resolve<FillIn[]>{

  constructor(
    private store: Store<{fillIns: {fillIns: FillIn[]}}>,
    private router: Router,
    private actions$: Actions
  ) { }

  // tslint:disable-next-line:typedef
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.store.select('fillIns').pipe(
      take(1),
      map(fillInsState => {
        return fillInsState.fillIns;
      }),
      switchMap(fillIns => {
        if (fillIns.length === 0) {
          this.store.dispatch(new FillInsActions.FetchFillIns());
          return this.actions$.pipe(
            ofType(FillInsActions.SET_FILLINS),
            take(1)
          );
        } else {
          return of(fillIns);
        }
      })
    );
  }
}
