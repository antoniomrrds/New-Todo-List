import { useState } from 'react';

export const useModal = <T = number>() => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<T | null>(null);

  const showModal = (item: T) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return { isModalOpen, selectedItem, showModal, closeModal };
};
