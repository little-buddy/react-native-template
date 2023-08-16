import i18n from '@/locales';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	theme: 'light',
	lang: i18n.locale,
};

const cnofigSlice = createSlice({
	name: 'config',
	initialState,
	reducers: {
		changeLang(state, action) {
			state.lang = action.payload;
		},
		changeTheme(state, action) {
			state.theme = action.payload;
		},
	},
});

export const { changeLang: changeLangAction } = cnofigSlice.actions;

export default cnofigSlice.reducer;
