// @ts-ignore
import persistReducer from 'redux-persist/es/persistReducer';
// @ts-ignore
import persistStore from 'redux-persist/es/persistStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
	Action,
	ThunkAction,
	combineReducers,
	configureStore,
} from '@reduxjs/toolkit';
import {
	FLUSH,
	REGISTER,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
} from 'redux-persist';
import logger from 'redux-logger';
import configReducer from './config';

const persisConfig = {
	key: 'rngo',
	storage: AsyncStorage,
};

const store = configureStore({
	reducer: persistReducer(
		persisConfig,
		combineReducers({
			config: configReducer,
		})
	),
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(logger),
});

const persistor = persistStore(store);

export { store, persistor };

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
