import style from './modalOverlay.module.css';
import React, { FC } from 'react';

interface ModalOverlayProps {
	onClose: () => void;
}

const ModalOverlay: FC<ModalOverlayProps> = ({ onClose }) => {
	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events
		<div className={style['modal-overlay']} onClick={() => onClose()} />
	);
};

export default ModalOverlay;
