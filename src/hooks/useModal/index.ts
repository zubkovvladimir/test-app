import { useState } from 'react';

interface UseModalProps {
  initial?: boolean;
}

/**
 * @param {boolean} initial
 * @returns {[boolean, fn, fn, unknown]} [isOpen, onOpen, onClose, data]
 */
export const useModal = <T>({
  initial = false,
}: UseModalProps): [boolean, (data?: T) => void, () => void, T | null] => {
  const [isOpen, setIsOpen] = useState<boolean>(initial);
  const [data, setData] = useState<T | null>(null);

  const onOpen = (data?: T) => {
    if (data) {
      setData(data);
    }
    setIsOpen(true);
  };

  const onClose = () => {
    setData(null);
    setIsOpen(false);
  };

  return [isOpen, onOpen, onClose, data];
};
