import React, { FC } from 'react';
import styles from './ingredientItem.module.css';
import {
	Counter,
	CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Ingredient } from '../../../../services/utils/interfaces';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../services/store';
import { useDrag } from 'react-dnd';

interface IngProps {
	data?: Ingredient;
	setOpenModal: () => void;
}

const IngredientItem: FC<IngProps> = ({ data, setOpenModal }) => {
	const [{ isDrag }, dragRef] = useDrag({
		type: 'item',
		item: { _id: data?._id },
		collect: (monitor) => ({
			isDrag: monitor.isDragging(),
		}),
	});
	const orderDetailsRequest = useSelector(
		(state: RootState) => state.burger.orderDetailsRequest
	);
	if (!data) {
		return null;
	}

	return (
		<>
			{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
			{!isDrag && (
				// eslint-disable-next-line jsx-a11y/click-events-have-key-events
				<div
					className={styles['ingredient-item']}
					onClick={setOpenModal}
					ref={dragRef}>
					<img src={data.image} alt={data.name} />
					<span style={{ display: 'inline-flex' }}>
						<span style={{ marginRight: '8px' }}>{data.price}</span>{' '}
						<CurrencyIcon type='primary' />
					</span>
					<span className='text text_type_main-small'>{data.name}</span>
					{data.__v > 0 && <Counter count={data.__v} size='default' />}
				</div>
			)}
		</>
	);
};
export default IngredientItem;
