import { Action } from '@ngrx/store';

import {FillIn} from '../../_models/fill-in';

export const SET_FILLINS = '[FillIns] Set FillIns';
export const FETCH_FILLINS = '[FillIns] Fetch FillIns';
export const UPDATE_FILLINS = '[FillIns] Update FillIns';
export const UPDATE_DB = '[FillIns] Update Database';

export class SetFillIns implements Action {
  readonly type = SET_FILLINS;

  constructor(public payload: FillIn[]) {}
}

export class FetchFillIns implements Action {
  readonly type = FETCH_FILLINS;
}

export class UpdateFillIns implements Action {
  readonly type = UPDATE_FILLINS;

  constructor(public payload: FillIn) {}
}

export class UpdateDb implements Action {
  readonly type = UPDATE_DB;

  constructor(public payload: FillIn) {}
}

export type FillInsActions =
  | SetFillIns
  | FetchFillIns
  | UpdateFillIns
  | UpdateDb;

