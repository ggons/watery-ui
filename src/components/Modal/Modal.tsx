import React from 'react';

const modalStyle = {
  borderRadius: '10px',
  border: '1px solid #ccc',
};

interface IModalProps {
  children: React.ReactNode;
  onConfirm: (data?: any) => void;
  onClose: (data?: any) => void;
}

export default function Modal({ children, onConfirm, onClose }: IModalProps) {
  return <div style={modalStyle}>{children}</div>;
}
