import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../services/store';
import style from './ingredientDetails.module.css';
import cs from 'classnames';

interface DetailProps {
	className?: string;
}

const IngredientDetails: FC<DetailProps> = ({ className }) => {
	const orderDetails = useSelector(
		(state: RootState) => state.burger.orderDetails
	);
	const {
		calories,
		carbohydrates,
		fat,
		proteins,
		image,
		name: title,
	} = orderDetails;

	const nutritionalValues = useMemo(() => {
		return {
			calories,
			carbohydrates,
			fat,
			proteins,
		};
	}, [calories, carbohydrates, fat, proteins]);

	return (
		<div>
			<div className={cs(style['ingredient-details'], 'mb-5', className)}>
				<img
					alt={title}
					className={style['ingredient-details__picture']}
					src={image}
				/>
			</div>
			<div className={'pt-4'} />
			<div
				className={cs(
					style['ingredient-details__title'],
					'text text_type_main-medium'
				)}>
				{title}
			</div>
			<div className={'pt-8'} />
			<div
				className={cs(
					style['ingredient-details__nutritional-values'],
					'text_color_inactive'
				)}>
				{Object.entries(nutritionalValues)?.length &&
					Object.entries(nutritionalValues).map(([key, value], ix, list) => {
						return (
							<div key={key}>
								<div className={style['ingredient-details__nutritional-value']}>
									<div
										className={
											style['ingredient-details__nutritional-value-title']
										}>
										{key}
										{/*{(lexemes as any)[key]}*/}
									</div>
									<div
										className={cs(
											style['ingredient-details__nutritional-value-value'],
											'text text_type_digits-default pt-2'
										)}>
										{value}
									</div>
								</div>
								{ix + 1 < list.length ? <div className={'pl-5'} /> : null}
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default IngredientDetails;
