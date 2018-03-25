import { combineReducers } from 'redux-immutable';

import { reducer as routerReducer } from './router/router.redux';
import { reducer as localesReducer } from './locales/locales.redux';
import { reducer as startupReducer } from './startup/startup.redux';
import { reducer as authReducer } from './auth/auth.redux';
import { reducer as roomsReducer } from './rooms/rooms.redux';
import { reducer as usersReducer } from './users/users.redux';
//<-- IMPORT MODULE REDUCER -->

export default function createReducer() {
  return combineReducers({
    route: routerReducer,
    locales: localesReducer,
    auth: authReducer,
    rooms: roomsReducer,
    users: usersReducer,
    //<-- INJECT MODULE REDUCER -->
  });
}
