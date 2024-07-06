import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [], // Ensure data is an array to match expected structure
	loading: false,
	error: null,
};

const PhotoSlice = createSlice({
	name: "Photo",
	initialState,
	reducers: {
		fetchPhotoStart(state) {
			state.loading = true;
			state.error = null;
		},
		fetchPhotoSuccess(state, action) {
			state.data = action.payload; // Ensure this matches the API response structure
			state.loading = false;
		},
		fetchPhotoFailure(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		initialPhoto(state, action) {
			state.data = [action.payload, ...state.data];
		},
	},
});

export const {
	fetchPhotoStart,
	fetchPhotoSuccess,
	fetchPhotoFailure,
	initialPhoto,
} = PhotoSlice.actions;

export default PhotoSlice.reducer;
