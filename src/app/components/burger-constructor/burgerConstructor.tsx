import {
	Button,
	CheckMarkIcon,
	ConstructorElement,
	CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrop } from 'react-dnd';
import React, { FC } from 'react';
import { Ingredient } from '../../../services/utils/interfaces';
import style from './burgerConstructor.module.css';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../services/store';
import { openOrderInfo, resetOrderInfo } from '../../../services/reducers';
import Modal from '../modal/modal';
import cs from 'classnames';

interface ConstructorProps {
	onDropHandler: (itemId: any) => void;
	draggedElements: Ingredient[];
}

const BurgerConstructor: FC<ConstructorProps> = ({
	onDropHandler,
	draggedElements,
}) => {
	const [, dropTarget] = useDrop({
		accept: 'item',
		drop(itemId) {
			onDropHandler(itemId);
		},
	});
	const orderInfoRequest = useSelector(
		(state: RootState) => state.burger.orderInfoRequest
	);
	const orderInfo = useSelector((state: RootState) => state.burger.orderInfo);
	const dispatch = useAppDispatch();
	const totalAmount = useSelector(
		(state: RootState) => state.burger.totalAmount
	);
	return (
		<div ref={dropTarget} className={style['constructor-wrapper']}>
			<div>
				{draggedElements?.length ? (
					draggedElements.map((item: Ingredient) => {
						return (
							<button
								key={item._id}
								onClick={() => dispatch(openOrderInfo(item))}>
								<ConstructorElement
									key={item._id}
									text={item.name}
									price={item.price}
									thumbnail={item.image}
								/>
							</button>
						);
					})
				) : (
					<p>Добавьте в корзину</p>
				)}
			</div>
			<div className={style['constructor-footer']}>
				<div className={style['total-price']}>
					<span className='text text_type_main-medium'>{totalAmount}</span>{' '}
					<CurrencyIcon type='primary' />
				</div>
				<div className={style['press-button']}>
					<Button htmlType={'button'} type={'primary'} size={'medium'}>
						Оформить заказ
					</Button>
				</div>
			</div>

			{orderInfoRequest && (
				<Modal onClose={() => dispatch(resetOrderInfo())}>
					<div className={style['order-info-wrapper']}>
						<span
							className={cs(
								style['order-info-id'],
								'text text_type_main-medium'
							)}>
							{orderInfo}
						</span>
						<span className='text text_type_main-medium'>
							идентификатор заказа
						</span>
						<CheckMarkIcon type='primary' className={style.icon} />
						<span className='text text_type_main-small'>
							Ваш заказ начали готожить
						</span>
						<span className='text text_type_main-small transparent'>
							Дождитесь готовности на орбитальной станции
						</span>
					</div>
				</Modal>
			)}
		</div>
	);
};

export default BurgerConstructor;
