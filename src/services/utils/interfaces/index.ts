export interface Ingredient {
	calories: number;
	carbohydrates: number;
	fat: number;
	image: string;
	image_large: string;
	image_mobile: string;
	name: string;
	price: number;
	proteins: number;
	type: string;
	__v: number;
	_id: number;
}

export interface BurgerState {
	ingredients: Ingredient[];
	constructorIngredients: Ingredient[];
	ingredientsError?: string | null;
	ingredientsRequest: boolean;
	orderDetails: any | null;
	orderDetailsError: string | null;
	orderDetailsRequest: boolean;
	totalAmount: number;
	orderInfo: number | null;
	orderInfoRequest: boolean;
}
