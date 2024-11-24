import React, {FC} from 'react';
// import {Tab, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
// import styles from './burger-ingredients.module.css';

interface ComponentProps {
    data: any;
}

const BurgerIngredients: FC<ComponentProps> = ({data}) => {
    console.log(data);
    return(
        <main>
            <h2>Соберите бургер</h2>
            {/*<Tab onClick={() => console.log('bulki')}>*/}
            {/*</Tab>*/}
        </main>
    )
}

export default BurgerIngredients