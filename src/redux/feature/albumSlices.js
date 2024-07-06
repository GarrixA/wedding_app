import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
	loading: false,
	error: null,
};

const AlbumSlice = createSlice({
	name: "album",
	initialState,
	reducers: {
		fetchAlbumStart(state) {
			state.loading = true;
			state.error = null;
		},
		fetchAlbumSuccess(state, action) {
			state.data = action.payload;
			state.loading = false;
		},
		fetchAlbumFailure(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		initialAlbum(state, action) {
			state.data = [action.payload, ...state.data];
		},
	},
});
export const {
	fetchAlbumStart,
	fetchAlbumSuccess,
	fetchAlbumFailure,
	initialAlbum,
} = AlbumSlice.actions;

export default AlbumSlice.reducer;
