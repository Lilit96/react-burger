import React from 'react';
import {BurgerIcon, Button, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

const AppHeader = () => {
    return(
        <header className={styles.header}>
            <div >
                <Button
                    htmltype="button"
                    type="secondary"
                    size="large"
                >
                    <BurgerIcon type="primary" />
                    Конструктор
                </Button>
                <Button
                    htmltype="button"
                    type="secondary"
                    size="large"
                >
                    <ListIcon  />
                    Лента заказов
                </Button>
            </div>
            <Logo />
            <Button htmltype="button">
                <ProfileIcon />
                Личный кабинет
            </Button>
        </header>
    )
}

export default AppHeader;