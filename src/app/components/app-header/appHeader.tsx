import React from 'react';
import {
	BurgerIcon,
	Button,
	ListIcon,
	Logo,
	ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './appHeader.module.css';

const AppHeader = () => {
	return (
		<header className={styles.header}>
			<nav className={'pt-4 pb-4'}>
				<ul className={styles['header-info']}>
					<Button htmlType='button' type='secondary' size='large'>
						<BurgerIcon type='primary' />
						Конструктор
					</Button>
					<Button htmlType='button' type='secondary' size='large'>
						<ListIcon type='primary' />
						Лента заказов
					</Button>
					<Logo className={styles['project-logo']} />
					<Button
						htmlType='button'
						type='secondary'
						size='large'
						className={styles['profile-btn']}>
						<ProfileIcon type='primary' />
						Личный кабинет
					</Button>
				</ul>
			</nav>
		</header>
	);
};

export default AppHeader;
