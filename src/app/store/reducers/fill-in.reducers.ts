

import * as FillInsActions from '../actions/fill-in.actions';
import {FillIn} from '../../_models/fill-in';
import {FillInModel} from '../../_models/fill-in.model';
import * as moment from 'moment';

export interface State{
  fillIns: FillIn[];
}

const initialState: State = {
  fillIns: []
};



export function fillInReducer(state= initialState,  action: FillInsActions.FillInsActions
) {
  switch (action.type) {
    case FillInsActions.SET_FILLINS:
      console.log(action.payload);
      return{
        ...state,
        fillIns: [...action.payload]
      };
  }

}
