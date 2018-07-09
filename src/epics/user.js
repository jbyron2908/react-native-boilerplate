import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import meQuery from '../graphql/queries/me';
import { getUserComplete } from '../reducers/user';

// Actions
const GET_USER = 'epic/user/GET_USER';

// Epic
export default action$ =>
  action$.pipe(
    ofType(GET_USER),
    mergeMap(() => meQuery().pipe(
      map(response => getUserComplete(response.data.me)),
      catchError(error => of(error)),
    )),
  );

// Action Creators
export function getUserEpic() {
  return {
    type: GET_USER,
  };
}
