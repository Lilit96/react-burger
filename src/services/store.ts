import { configureStore } from '@reduxjs/toolkit';

import { burgerReducer } from './reducers';
import { useDispatch } from 'react-redux';

const store = configureStore({
	reducer: {
		burger: burgerReducer,
	},
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;
export default store;
