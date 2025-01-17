import * as actionTypes from './actionTypes';
import authApi from '../../api/auth-api';

const loginSuccess = () => {
	return {
		type: actionTypes.AUTH_SUCCESS
	}
}

const checkAuthStart = () => {
	return {
		type: actionTypes.AUTH_USER_INFO_START
	};
}

const authUserInfoSuccess = (user) => {
	return {
		type: actionTypes.AUTH_USER_INFO_SUCCESS,
		user: user,
	}
}


const authFailed = (error) => {
	return {
		type: actionTypes.AUTH_FAILED,
		error
	}
}

export const logout = () => {
	localStorage.removeItem("gal");
	return {
		type: actionTypes.LOGOUT_SUCCESS
	}
}

export const setAuthRedirectPath = (path) => {
	return {
		type: actionTypes.SET_AUTH_REDIRECT_PATH,
		path: path
	};
};


export const loginStart = () => {
	return {
		type: actionTypes.AUTH_LOGIN
	}
}


export const login1 = (creds) => {
	return async (dispatch, getState) => {
		dispatch(loginStart());
		const { status, data, error } = await authApi.login(creds);
		if (status === 200 && data.token) {
			localStorage['gal'] = await data.token
			return dispatch(loginSuccess());
		}
		else {
			return dispatch(authFailed(error))
		}
	}
}

export const checkAuth1 = () => {
	return async (dispatch, getState) => {
		dispatch(checkAuthStart());
		const token = localStorage.getItem('gal');
		if (!token) {
			dispatch(logout());
		}
		else {
			const { status, data, error } = await authApi.checkAuth();
			if (status === 200) {
				return dispatch(authUserInfoSuccess(data));
			}
			else {
				return dispatch(authFailed(error));
			}
		}

	};
};

export const registerLoading = () => {
    return {
        type: actionTypes.REGISTER_START
    };
};
export const registerSuccess = () => {
    return {
        type: actionTypes.REGISTER_SUCCESS,
    };
};

export const registerFail = error => {
    return {
        type: actionTypes.REGISTER_FAIL,
        error
    };
};



export const logoutAllLoading = () => {
    return {
        type: actionTypes.LOGOUT_START
    };
};
export const logoutAllSuccess = () => {
    return {
        type: actionTypes.LOGOUT_SUCCESS,
    };
};

export const logoutAllFail = error => {
    return {
        type: actionTypes.LOGOUT_FAIL,
        error
    };
};

export const logoutAll1 = () => {
    return async (dispatch,getState) => {
        dispatch(logoutAllLoading())
        const{status, error} = await authApi.logoutAll()
        if (status === 200) {
			await localStorage.removeItem('gal');
            return dispatch(logoutAllSuccess());
        } else {
            return dispatch(logoutAllFail(error));
        }
    }
}

