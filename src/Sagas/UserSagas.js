import {call, put, select} from "redux-saga/effects";

import {UserTypes} from "../Redux/UserReducer";
import userModel from "../Models/UserModel";

const login = function* (api, action) {
    try {
        const {username, password} = action;

        const response = yield call(api.getTokenWithUsernameAndPassword, username, password);
        const result = response.data || {};

        const error = result.error
            ? result.error.message
            : '';

        const statusCode = result.status_code
            ? result.status_code
            : null;

        if (statusCode !== 200) {
            yield put({type: UserTypes.LOGIN_WITH_USERNAME_AND_PASSWORD_FAILURE, error: error});
        } else {
            yield put({type: UserTypes.LOGIN_WITH_USERNAME_AND_PASSWORD_SUCCESS, result});

            const token = result.token;
            const userData = yield call(getUserData, api, token);

            userData.token = token;
            userData.isLoggedIn = 1;
            yield call(userModel.updateUser, userData);
            yield put({type: UserTypes.GET_USER_DATA_SUCCESS, user: userData});
        }
    } catch (error) {
        yield put({type: UserTypes.LOGIN_WITH_USERNAME_AND_PASSWORD_FAILURE, error: error.message});
    }
};

const getUserData = function* (api, token) {
    const response = yield call(api.getUser, token);
    const result = response.data;
    return result.data[0];
};

const fetchRefreshToken = function* (api) {
    try {
        const token = yield select(state => state.user.token);

        const response = yield call(api.refreshToken, token);
        const result = response.data || {};

        if (result.status_code !== 200) {
            yield put({type: UserTypes.REFRESH_TOKEN_FAILURE, error: result.error ? result.error.message : ''});
        } else {
            // const userId = yield select(state => state.user.id);
            // yield call(userModel.saveNewToken, userId, result.result);
            yield put({type: UserTypes.REFRESH_TOKEN_SUCCESS, token: result.result});
        }
    } catch (error) {
        yield put({type: UserTypes.REFRESH_TOKEN_FAILURE, error: error.message});
    }
};

const logout = function* (){
    yield call(userModel.deleteUser);
    yield put({type: UserTypes.LOGOUT_SUCCESS});
};

export {
    login,
    logout,
    fetchRefreshToken
};