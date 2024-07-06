import { configureStore } from "@reduxjs/toolkit";
import albumSlices from "./feature/albumSlices";
import albumImagesSlice from "./feature/albumImagesSlice";
import testimonySlice from "./feature/testimonySlice";
import photoSlice from "./feature/photoSlice";

const store = configureStore({
	reducer: {
		album: albumSlices,
		albumImage: albumImagesSlice,
		testimony: testimonySlice,
		photo: photoSlice,
	},
});

export default store;
