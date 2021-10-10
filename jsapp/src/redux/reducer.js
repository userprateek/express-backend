import * as types from "./action";
const initialstate = { location: "home" };
const reducer = (state = initialstate, action) => {
	switch (action.type) {
		case types.SETLOCATION:
			return { ...state, location: action.data };

		default:
			return state;
	}
};
export default reducer;
