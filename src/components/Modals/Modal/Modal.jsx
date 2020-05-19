import React from 'react';
import s from './Modal.module.scss';
import { useLocation, useHistory } from 'react-router-dom';

const Modal = ({ isActive, children, handleClose }) => {
  const { goBack } = useHistory();
  const { state = {} } = useLocation();
  const isRouteModal = state.modal;

  const $root = document.getElementById('root');
  $root.classList.add(s.modalActive);

  if (!(isRouteModal || isActive)) {
    $root.classList.remove(s.modalActive);
    return null;
  }

  return (
    <div className={s.modal}>
      {(isRouteModal || isActive) && (
        <div
          onClick={handleClose || goBack}
          className={s.modalOverlay}
        />
      )}

      <div className={s.modalContent}>
        {(isRouteModal || isActive) && (
          <div
            onClick={handleClose || goBack}
            className={s.modalClose}
          />
        )}

        {children}
      </div>
    </div>
  );
};

export default Modal;
