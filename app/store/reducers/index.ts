/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from './loginReducer';
import * as ClubReducer from './ClubReducer';
import * as themeReducer from './themeReducer';
export default Object.assign(loginReducer, ClubReducer, loadingReducer, themeReducer);
