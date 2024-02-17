import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	fullName: "",
	nationalId: "",
	createdAt: "",
};

const customerSlice = createSlice({
	name: "customer",
	initialState,
	reducers: {
		createCustomer: {
			prepare(fullName, nationalId) {
				return { payload: { fullName, nationalId } };
			},
			reducer(state, action) {
				state.fullName = action.payload.fullName;
				state.nationalId = action.payload.nationalId;
				state.createdAt = new Date().toISOString();
			},
		},
		updateName(state, action) {
			state.fullName = action.payload.fullName;
		},
	},
});

export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;

// export default function customerReducer(state = initialState, action) {
// 	switch (action.type) {
// 		case "customer/createCustomer":
// 			return { ...state, ...action.payload };
// 		case "customer/updateName":
// 			return { ...state, fullName: action.payload };
// 		default:
// 			return state;
// 	}
// }

// export function createCustomer(fullName, nationalId) {
// 	return {
// 		type: "customer/createCustomer",
// 		payload: { fullName, nationalId, createdAt: new Date().toISOString() },
// 	};
// }

// export function updateName(fullName) {
// 	return { type: "customer/updateName", payload: fullName };
// }
