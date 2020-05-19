import { useState } from 'react';

export const useModal = (initialMode = false) => {
  const [isModalOpen, setModalOpen] = useState(initialMode);

  const toggle = () => {
    setModalOpen(!isModalOpen);
  };

  return [isModalOpen, setModalOpen, toggle];
};

export const useModalWithData = (
  initialMode = false,
  initialData = null,
) => {
  const [isModalOpen, setModalOpen] = useModal(initialMode);
  const [modalData, setModalData] = useState(initialData);

  const setModalState = (state) => {
    setModalOpen(state);

    if (state === false) {
      setModalData(null);
    }
  };

  return {
    isModalOpen,
    setModalOpen,
    modalData,
    setModalData,
    setModalState,
  };
};
