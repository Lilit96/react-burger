import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchIngredients as apiFetchIngredients } from '../api';
import { BurgerState, Ingredient } from '../utils/interfaces';

const initialState: BurgerState = {
	ingredients: [],
	constructorIngredients: [],
	// actualIngredients: [],
	// idToIngredientMap: {},
	// idToActualIngredientsCountMap: {},
	ingredientsError: '',
	ingredientsRequest: true,
	orderDetails: null,
	orderDetailsError: null,
	orderDetailsRequest: false,
	orderInfoRequest: false,
	totalAmount: 0,
	orderInfo: null,
};

export const fetchIngredients = createAsyncThunk(
	'burger/fetchIngredients',
	apiFetchIngredients
);

// Create slice
const slice = createSlice({
	name: 'burger',
	initialState,
	reducers: {
		openOrderDetails(state, action: PayloadAction<Ingredient>) {
			state.orderDetails = action.payload;
			state.orderDetailsRequest = true;
		},
		resetOrderDetails(state) {
			state.orderDetails = null;
			state.orderDetailsError = null;
			state.orderDetailsRequest = false;
		},
		resetOrderInfo(state) {
			state.orderInfo = null;
			state.orderInfoRequest = false;
		},
		addCount(state, action: PayloadAction<Ingredient>) {
			state.ingredients = state.ingredients.map((item) => {
				// Compare the _id of the ingredient with the _id in the payload
				if (item._id === action.payload._id) {
					state.totalAmount += item.price;
					return { ...item, __v: item.__v + 1 }; // Increment __v if ids match
				}
				return item;
			});
		},
		openOrderInfo(state, action: PayloadAction<Ingredient>) {
			state.orderInfo = action.payload._id;
			state.orderInfoRequest = true;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(fetchIngredients.pending, (state) => {
				state.ingredientsRequest = true;
				state.ingredientsError = null;
			})
			.addCase(fetchIngredients.fulfilled, (state, action) => {
				state.ingredients = action.payload;
				state.ingredientsRequest = false;
			})
			.addCase(fetchIngredients.rejected, (state, action) => {
				state.ingredientsError = action.error.message;
				state.ingredientsRequest = false;
			});
	},
});

// Export reducer and actions
export const burgerReducer = slice.reducer;

export const {
	openOrderDetails,
	resetOrderDetails,
	addCount,
	openOrderInfo,
	resetOrderInfo,
} = slice.actions;
