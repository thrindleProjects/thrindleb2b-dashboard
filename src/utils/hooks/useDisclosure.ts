import { useState } from 'react';

export default function useDisclosure(props?: {
  onOpen?<T>(): T | void;
  onClose?<T>(): T | void;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpen = async () => {
    if (props && props.onOpen) {
      await props.onOpen();
    }

    setIsOpen(true);
  };

  const handleClose = async () => {
    if (props && props.onClose) {
      await props.onClose();
    }
    setIsOpen(false);
  };

  const toggle = async () => {
    setIsOpen((old) => !old);
  };

  return Object.freeze({
    isOpen,
    open: handleOpen,
    close: handleClose,
    toggle,
  });
}
