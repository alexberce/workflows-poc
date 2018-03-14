import { takeLatest, takeEvery, all } from 'redux-saga/effects'
import API from '../Services/Api'

/* Types */
import { UserTypes } from '../Redux/UserReducer';

/* Sagas */
import {fetchRefreshToken, login, logout} from './UserSagas';


/*
* API
*
* The API we use is only used from Sagas, so we create it here and pass along to the sagas which need it.
*/
const api = API.create();

/* Connect Types To Sagas */
export default function * root () {
    yield all([
        takeLatest(UserTypes.LOGIN_WITH_USERNAME_AND_PASSWORD, login, api),

        takeLatest(UserTypes.REFRESH_TOKEN, fetchRefreshToken, api),
        takeLatest(UserTypes.LOGOUT, logout),
    ]);
};