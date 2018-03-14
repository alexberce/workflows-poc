import {createActions, createReducer} from "reduxsauce";
import Immutable from "seamless-immutable";

import userModel from "../Models/UserModel";

/* Types and Action Creators */
const {Types, Creators} = createActions({
    changeIsLoggedIn: ['isLoggedIn'],

    loginWithUsernameAndPassword: ['username', 'password'],
    loginWithUsernameAndPasswordSuccess: null,
    loginWithUsernameAndPasswordFailure: null,

    refreshToken: ['token'],
    refreshTokenSuccess: ['token'],
    refreshTokenFailure: ['error'],

    checkTokenExpiration: null,

    logout: null,
    logoutSuccess: null,

    getUserDataSuccess: ['user'],
});

export const UserTypes = Types;
export default Creators;

const getLoggedInUser = () => {
    let userData = {
        id: null,
        token: '',
        email: '',
        isLoggedIn: false,
    };

    const user = userModel.getUser() || {};

    if (Object.keys(user).length) {
        userData.id = user.id;
        userData.token = user.token;
        userData.email = user.email;
        userData.isLoggedIn = !!user.isLoggedIn;
    }

    //GET DATA FROM IDB HERE
    return userData;
};

const userData = getLoggedInUser();

const INITIAL_STATE = Immutable({
    id: userData.id,
    token: userData.token,
    email: userData.email,
    isLoggedIn: userData.isLoggedIn,
    isPerformingLoginRequest: false,
    isFetchingUserData: 0,
});

/* Selectors */
export const UserSelectors = {
    selectToken: state => state.user.token
};

/* Reducers */
export const changeIsLoggedInReducer = (state, {isLoggedIn}) => {
    return {
        ...state,
        isLoggedIn: isLoggedIn || false,
    };
};

export const loginWithUsernameAndPasswordReducer = (state) => {
    return {
        ...state,
        isPerformingLoginRequest: true,
    };
};

export const loginWithUsernameAndPasswordSuccessReducer = (state, action) => {
    const {result} = action;
    const token = result.token || '';

    return {
        ...state,
        token: token,
        isPerformingLoginRequest: false,
        isLoggedIn: true,
    };
};

export const loginWithUsernameAndPasswordFailureReducer = (state, action) => {
    const {error} = action;
    return {
        ...state,
        isPerformingLoginRequest: false,
        isLoggedIn: false,
        error: error,
    };
};

export const refreshTokenReducer = (state) => {
    return {
        ...state,
        isPerformingLoginRequest: true,
    };
};

export const refreshTokenSuccessReducer = (state, action) => {
    const {token} = action;

    return {
        ...state,
        token: token,
        isPerformingLoginRequest: false,
    };
};

export const refreshTokenFailureReducer = (state, action) => {
    const {error} = action;

    return {
        ...state,
        error: error,
        isPerformingLoginRequest: false,
    };
};

export const logoutReducer = (state) => {
    return {
        ...state,
    };
};

export const logoutSuccessReducer = (state) => {
    return {
        ...state,
        isLoggedIn: false,
    };
};

export const getUserDataSuccessReducer = (state, action) => {
    const {user} = action;
    return {
        ...state,
        id: user.id,
        email: user.email,
    }
};

/* Hookup Reducers To Types */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.CHANGE_IS_LOGGED_IN]: changeIsLoggedInReducer,

    [Types.GET_USER_DATA_SUCCESS]: getUserDataSuccessReducer,
    // [Types.GET_USER_DATA_FAILURE]: getUserDataFailureReducer,

    [Types.LOGIN_WITH_USERNAME_AND_PASSWORD]: loginWithUsernameAndPasswordReducer,
    [Types.LOGIN_WITH_USERNAME_AND_PASSWORD_SUCCESS]: loginWithUsernameAndPasswordSuccessReducer,
    [Types.LOGIN_WITH_USERNAME_AND_PASSWORD_FAILURE]: loginWithUsernameAndPasswordFailureReducer,

    [Types.REFRESH_TOKEN]: refreshTokenReducer,
    [Types.REFRESH_TOKEN_SUCCESS]: refreshTokenSuccessReducer,
    [Types.REFRESH_TOKEN_FAILURE]: refreshTokenFailureReducer,

    [Types.LOGOUT]: logoutReducer,
    [Types.LOGOUT_SUCCESS]: logoutSuccessReducer,
});

