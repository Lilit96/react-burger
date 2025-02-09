import styles from './burgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../services/store';
import IngredientList from './ingredient-list/ingredientList';

const ingredientTypes: Record<string, string> = {
	bun: 'Булки',
	sauce: 'Соусы',
	main: 'Начинки',
};

const BurgerIngredients = () => {
	const [selectedIngredientType, setSelectedIngredientType] = useState('bun');

	const ingredientsData = useSelector(
		(state: RootState) => state.burger.ingredients
	);

	const wrapperRef = useRef<HTMLDivElement | null>(null);
	const bunRef = useRef<HTMLParagraphElement | null>(null);
	const sauceRef = useRef<HTMLParagraphElement | null>(null);
	const mainRef = useRef<HTMLParagraphElement | null>(null);

	const changeTab = (tab: string) => {
		setSelectedIngredientType(tab);
		const element = document.getElementById(tab);
		if (element) element.scrollIntoView({ behavior: 'smooth' });
	};

	const filterIngredients = (type: string) =>
		ingredientsData?.filter((i) => i.type === type);

	const handleScroll = () => {
		if (wrapperRef?.current) {
			// const bunDistance = Math.abs(
			// 	wrapperRef?.current?.getBoundingClientRect()?.top -
			// 		bunRef?.current?.getBoundingClientRect()?.top
			// );
			// const sauceDistance = Math.abs(
			// 	wrapperRef?.current?.getBoundingClientRect().top -
			// 		sauceRef?.current?.getBoundingClientRect().top
			// );
			// const mainDistance = Math.abs(
			// 	wrapperRef?.current?.getBoundingClientRect().top -
			// 		mainRef?.current?.getBoundingClientRect().top
			// );
			// const minDistance = Math.min(bunDistance, sauceDistance, mainDistance);
			// const currentHeader =
			// 	minDistance === bunDistance
			// 		? 'bun'
			// 		: minDistance === sauceDistance
			// 		? 'sauce'
			// 		: 'main';
			//
			// setSelectedIngredientType((prevState) =>
			// 	currentHeader === prevState.current ? prevState.current : currentHeader
			// );
		}
	};

	if (!ingredientsData.length) {
		return null;
	}

	return (
		<div className={styles['burger-ingredients']}>
			<h2 className={styles['ingredients-title']}>Соберите бургер</h2>
			<div className={styles['burger-ingredients__tabs']}>
				{Object.keys(ingredientTypes)?.map((type) => (
					<Tab
						key={type}
						active={selectedIngredientType === type}
						value={type}
						onClick={(type) => {
							changeTab(type);
						}}>
						{ingredientTypes[type]}
					</Tab>
				))}
			</div>
			<div
				ref={wrapperRef}
				onScroll={handleScroll}
				className={styles['ingredients-list-wrapper']}>
				<IngredientList
					title={ingredientTypes.bun}
					data={filterIngredients('bun')}
					childRef={bunRef}
					id={'bun'}
				/>
				<IngredientList
					title={ingredientTypes.sauce}
					data={filterIngredients('sauce')}
					childRef={sauceRef}
					id={'sauce'}
				/>
				<IngredientList
					title={ingredientTypes.main}
					data={filterIngredients('main')}
					childRef={mainRef}
					id={'main'}
				/>
			</div>
		</div>
	);
};

export default BurgerIngredients;
