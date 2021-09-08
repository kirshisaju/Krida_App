/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call } from 'redux-saga/effects';
//import { delay } from 'redux-saga';

import { Alert } from 'react-native';
import clubUser from 'app/services/clubUser';
import * as ClubcreateAction from 'app/store/actions/ClubActions';

// Our worker Saga that logins the user
export default function* ClubCreateAsync( action:any ): any {
  yield put(ClubcreateAction.enableLoader());
  
  //how to call api
  const response = yield call(clubUser, action );
  //mock response
  //const response = { success: true, data: { id: 1 }, message: 'Success' };

  if (response.status) {
    //yield put(ClubcreateAction.onClubcreateresponse(response.data));
    yield put(ClubcreateAction.disableLoader());

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  } else {
    //yield put(ClubcreateAction.createFailed());
    yield put(ClubcreateAction.disableLoader());
    setTimeout(() => {
      //Alert.alert('BoilerPlate', response);
      //Alert.alert('BoilerPlate', response);
    }, 200);
  }
}
