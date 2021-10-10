import * as types from "./action";

export function updatelocation(data) {
	return {
		type: types.SETLOCATION,
		data: data,
	};
}
