import React from 'react';
interface IModalProps {
    children: React.ReactNode;
    onConfirm: (data?: any) => void;
    onClose: (data?: any) => void;
}
export default function Modal({ children, onConfirm, onClose }: IModalProps): import("react/jsx-runtime").JSX.Element;
export {};
