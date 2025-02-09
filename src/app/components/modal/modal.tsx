import React, { FC, ReactNode, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import style from './modal.module.css';
import ModalOverlay from './modal-overlay/modalOverlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

interface ModalProps {
	onClose: () => void;
	header?: string;
	children: ReactNode;
}

const Modal: FC<ModalProps> = ({ onClose, header, children }) => {
	const modalElementRef = useRef(null);

	useEffect(() => {
		const escFunc = (e: KeyboardEvent) => {
			e.key === 'Escape' && onClose();
		};
		document.addEventListener('keydown', escFunc);

		return () => {
			document.removeEventListener('keydown', escFunc);
		};
	}, [onClose]);
	const portalContent = (
		<>
			<ModalOverlay onClose={onClose} />
			{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
			<div
				className={style.modal_content}
				ref={modalElementRef}
				onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
				<div className={style.modal_content_caption}>
					<span className='text text_type_main-medium'>{header}</span>
					<CloseIcon
						type='primary'
						className={style.close_button}
						onClick={() => onClose()}
					/>
				</div>
				{children}
			</div>
		</>
	);

	const portalRoot = document.getElementById('portal');

	if (!portalRoot) {
		return null;
	}
	return ReactDOM.createPortal(portalContent, portalRoot);
};

export default Modal;
