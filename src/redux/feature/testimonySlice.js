import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: null,
	loading: false,
	error: null,
};
const Testimony = createSlice({
	name: "testimony",
	initialState,
	reducers: {
		addTestimonyStart(state) {
			state.loading = true;
			state.error = null;
		},
		addTestimonySuccess(state, action) {
			state.data = action.payload;
			state.loading = false;
		},
		addTestimonyFailure(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		initialTestimony(state, action) {
			state.data = [action.payload, ...state.data];
		},

		getTestimonyStart(state) {
			state.loading = true;
			state.error = null;
		},
		getTestimonySuccess(state, action) {
			state.data = action.payload;
			state.loading = false;
		},
		getTestimonyFailure(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		initialTestimony(state, action) {
			state.data = [action.payload, ...state.data];
		},

		deleteTestimonyStart(state) {
			state.loading = false;
			state.error = null;
		},
		deleteTestimonySuccess(state, action) {
			state.data = state.data.filter((item) => item._id !== action.payload);
			state.loading = false;
		},
		deleteTestimonyFailure(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		initialTestimony(state, action) {
			state.data = [action.payload, ...state.data];
		},
	},
});

export const {
	addTestimonyStart,
	addTestimonyFailure,
	addTestimonySuccess,
	getTestimonyStart,
	getTestimonyFailure,
	getTestimonySuccess,
	deleteTestimonyStart,
	deleteTestimonyFailure,
	deleteTestimonySuccess,
	initialTestimony,
} = Testimony.actions;

export default Testimony.reducer;
