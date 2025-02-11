import { INGREDIENTS_URL } from './config';
import { Ingredient } from './utils/interfaces';

export const fetchIngredients = async (): Promise<Ingredient[]> => {
	const response = await fetch(INGREDIENTS_URL);
	const result = await response.json();
	if (result.success === true) {
		return result.data;
	} else {
		throw new Error("Can't get data from server");
	}
};
