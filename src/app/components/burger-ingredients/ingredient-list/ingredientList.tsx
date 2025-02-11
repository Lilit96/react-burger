import React, { FC } from 'react';
import styles from './ingredientList.module.css';
import IngredientItem from '../ingredient-item/ingredientItem';
import { Ingredient } from '../../../../services/utils/interfaces';
import Modal from '../../modal/modal';
import {
	resetOrderDetails,
	openOrderDetails,
} from '../../../../services/reducers';
import { RootState, useAppDispatch } from '../../../../services/store';
import { useSelector } from 'react-redux';
import IngredientDetails from '../ingredient-details/ingredientDetails';

interface IngListProps {
	data: Ingredient[];
	childRef: React.RefObject<HTMLParagraphElement>;
	title?: string;
	id: string;
}

const IngredientList: FC<IngListProps> = ({ data, childRef, title, id }) => {
	const dispatch = useAppDispatch();
	const orderDetailsRequest = useSelector(
		(state: RootState) => state.burger.orderDetailsRequest
	);

	const handleClick = (item: Ingredient) => {
		dispatch(openOrderDetails(item));
	};

	return (
		<>
			<p className='' id={id} ref={childRef}>
				{title}
			</p>
			<div className={styles['ingredient-list']}>
				{data?.map((item) => {
					return (
						<IngredientItem
							key={item._id}
							data={item}
							setOpenModal={() => handleClick(item)}
						/>
					);
				})}
			</div>

			{orderDetailsRequest && (
				<Modal
					onClose={() => dispatch(resetOrderDetails())}
					header={'Детали ингредиента'}>
					<IngredientDetails
						className={'burger-constructor__ingredient-details'}
					/>
				</Modal>
			)}
		</>
	);
};

export default IngredientList;
