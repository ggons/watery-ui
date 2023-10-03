import React from 'react';
import { ModalContext, IOpenModalProps } from './ModalContext';

interface IModalContextValue {
  openModal: (props: IOpenModalProps) => void;
}

export default function useModal(): IModalContextValue {
  return React.useContext(ModalContext);
}
