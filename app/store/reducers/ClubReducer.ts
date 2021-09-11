/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import {
  IClubRequestState,
} from 'app/models/actions/club';
import { IClubState } from 'app/models/reducers/club';

const initialState: IClubState = {
  club_name: '',
  club_address: '',
  club_postcode: '',
  club_country: '',
  club_email_address: '',
  club_contact: '',
  club_user: '',
  club_logo_id: '',
  club_inception_date: '',
  id:'',
  club_services:{}
};

export const ClubReducer = createReducer(initialState, {
  [types.CLUB_CREATE](state: IClubState, action: IClubRequestState) {
    return {
      ...state,
      club_name: action.club_name,
      club_address: action.club_address,
      club_postcode: action.club_postcode,
      club_country: action.club_country,
      club_user: action.club_user,
      club_logo_id: action.club_logo_id,
      club_inception_date: action.club_inception_date
    };
  },
});
