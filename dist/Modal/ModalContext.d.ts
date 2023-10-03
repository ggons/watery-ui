import React from 'react';
export interface IOpenModalProps {
    Modal?: () => React.ReactNode;
    header?: React.ReactNode;
    body: React.ReactNode;
    overlayClose?: boolean;
    closeButton?: boolean;
    overlayStyle?: {
        [x: string]: any;
    };
    onOk?: () => void;
    onCancel?: () => void;
}
export declare const ModalContext: React.Context<{
    openModal: (props: IOpenModalProps) => void;
}>;
export declare function ModalProvider({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
