import { FC, ReactNode } from 'react';

import { Modal as AntModal } from 'antd';

interface ModalProps {
  title: ReactNode;
  width: number;
  isOpen: boolean;
  onClose: () => void;
  destroyOnClose?: boolean;
}

export const Modal: FC<ModalProps> = ({ title, width, isOpen, onClose, destroyOnClose = true, children }) => (
  <AntModal
    closable={false}
    destroyOnClose={destroyOnClose}
    footer={null}
    onCancel={onClose}
    title={title}
    visible={isOpen}
    width={width}
  >
    {children}
  </AntModal>
);
