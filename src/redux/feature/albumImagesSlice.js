import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
	loading: false,
	error: null,
};
const AlbumSingleImages = createSlice({
	name: "album/images",
	initialState,
	reducers: {
		fetchAlbumSingleImageStart(state) {
			state.loading = true;
			state.error = null;
		},
		fetchAlbumSingleImageSuccess(state, action) {
			state.data = action.payload;
			state.loading = false;
		},
		fetchAlbumSingleImageFailure(state, action) {
			state.loading = false;
			state.error = action.payload;
		},
		initialAlbumImages(state, action) {
			state.data = [action.payload, ...state.data];
		},
	},
});

export const {
	fetchAlbumSingleImageStart,
	fetchAlbumSingleImageFailure,
	fetchAlbumSingleImageSuccess,
	initialAlbumImages,
} = AlbumSingleImages.actions;

export default AlbumSingleImages.reducer;
