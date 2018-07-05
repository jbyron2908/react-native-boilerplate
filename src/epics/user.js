import { ofType } from 'redux-observable';
import { map, mergeMap } from 'rxjs/operators';
import meQuery from '../graphql/queries/me';
import { getUserComplete } from '../reducers/user';

// Actions
const GET_USER = 'epic/user/GET_USER';

// Epic
export default action$ =>
  action$.pipe(
    ofType(GET_USER),
    mergeMap(() => meQuery()),
    map(response => getUserComplete(response.data.me)),
  );

// Action Creators
export function getUser() {
  return {
    type: GET_USER,
  };
}
