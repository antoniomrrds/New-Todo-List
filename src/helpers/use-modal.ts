import { useState } from 'react';

export type CallbackFunction = () => void;

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [onConfirmCallback, setOnConfirmCallback] =
    useState<CallbackFunction | null>(null);
  const [onCancelCallback, setOnCancelCallback] =
    useState<CallbackFunction | null>(null);

  const openModal = (
    onConfirm?: CallbackFunction,
    onCancel?: CallbackFunction,
  ) => {
    setIsOpen(true);
    if (onConfirm) setOnConfirmCallback(() => onConfirm);
    if (onCancel) setOnCancelCallback(() => onCancel);
  };

  const closeModal = () => {
    setIsOpen(false);
    setOnConfirmCallback(null);
    setOnCancelCallback(null);
  };

  const confirmAndCloseModal = () => {
    if (onConfirmCallback) onConfirmCallback();
    closeModal();
  };

  const onModalCancel = () => {
    if (onCancelCallback) onCancelCallback();
    closeModal();
  };

  return {
    isOpen,
    openModal,
    closeModal,
    confirmAndCloseModal,
    onModalCancel,
  };
};
