import React from 'react';
import {BurgerIcon, Button, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

const AppHeader = () => {
    return(
        <header className={styles.header}>
            <div >
                <Button
                    htmlType="button"
                    type="secondary"
                    size="large"
                >
                    <BurgerIcon type="primary" />
                    Конструктор
                </Button>
                <Button
                    htmlType="button"
                    type="secondary"
                    size="large"
                >
                    <ListIcon type="secondary"/>
                    Лента заказов
                </Button>
            </div>
            <Logo />
            <Button htmlType="button">
                <ProfileIcon  type="secondary"/>
                Личный кабинет
            </Button>
        </header>
    )
}

export default AppHeader;