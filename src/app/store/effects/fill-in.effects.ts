import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';

import * as FillInsActions from '../actions/fill-in.actions';
import {catchError, map, mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {FillIn} from '../../_models/fill-in';
import {environment} from '../../../environments/environment';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {RequestsService} from '../../_services/requests.service';

@Injectable()
export class FillInEffects {
  baseUrl = environment.apiUrl;

  fetchFillIns = createEffect(() => {
    return this.actions$.pipe(
      ofType(FillInsActions.FETCH_FILLINS),
      switchMap(() => {
        return this.requestsService.getRequests().pipe(
          map((fillIns: FillIn[]) => {
              return new FillInsActions.SetFillIns(fillIns);
            }
          )
        );
      })
    );
  });

  @Effect()
  UpdateFillIns = this.actions$.pipe(
    ofType(FillInsActions.UPDATE_DB),
    switchMap((action: any) => {
      return this.requestsService.addFillIn(action.payload).pipe(
        map(
          () => {
            return new FillInsActions.FetchFillIns();
          }
        )
      );
    })
);



  constructor(private actions$: Actions,
              private requestsService: RequestsService,
              private http: HttpClient,
              private store: Store<{fillIns: {fillIns: FillIn[]}}>) {}
}
