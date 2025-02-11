// import { useEffect, useState } from 'react';
// import { API_URL } from './utils/constants';
import AppHeader from './components/app-header/appHeader';
import BurgerIngredients from './components/burger-ingredients/burgerIngredients';
// import BurgerConstructor from './components/burger-constructor/BurgerConstructor';
import styles from './app.module.css';
import { addCount, fetchIngredients } from '../services/reducers/burger';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import React, { useEffect } from 'react';
import { RootState, useAppDispatch } from '../services/store';
import BurgerConstructor from './components/burger-constructor/burgerConstructor';
import { useSelector } from 'react-redux';
import { Ingredient } from '../services/utils/interfaces';

export const App = () => {
	const dispatch = useAppDispatch();
	const ingredientsData = useSelector(
		(state: RootState) => state.burger.ingredients
	);
	const [elements, setElements] = React.useState<Ingredient[]>([]);
	const [draggedElements, setDraggedElements] = React.useState<Ingredient[]>(
		[]
	);
	useEffect(() => {
		dispatch(fetchIngredients());
	}, [dispatch]);
	useEffect(() => {
		setElements(ingredientsData);
	}, [ingredientsData]);

	const handleDrop = (itemId: Ingredient) => {
		dispatch(addCount(itemId));
		setDraggedElements([
			...draggedElements,
			...elements.filter((element: Ingredient) => element._id === itemId._id),
		]);
	};

	return (
		<div className={styles.app}>
			<AppHeader />

			<main className={styles.main}>
				<DndProvider backend={HTML5Backend}>
					<BurgerIngredients />
					<BurgerConstructor
						onDropHandler={handleDrop}
						draggedElements={draggedElements}
					/>
				</DndProvider>
			</main>
		</div>
	);
};
