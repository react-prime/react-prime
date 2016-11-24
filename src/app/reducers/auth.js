import * as c from 'app/constants';

export const initialState = {
	authenticated: false,
	user: null,
	error: false,
};

export default function authReducer(state = initialState, action) {
	switch (action.type) {
	case c.AUTH_SIGNIN_SUCCESS:
		return {
			...state,
			authenticated: true,
			user: action.payload,
			error: false,
		};
	case c.AUTH_SIGNIN_FAILED:
		return {
			...state,
			authenticated: false,
			user: null,
			error: true,
		};
	default:
		return state;
	}
}
