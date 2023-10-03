import { IOpenModalProps } from './ModalContext';
interface IModalContextValue {
    openModal: (props: IOpenModalProps) => void;
}
export default function useModal(): IModalContextValue;
export {};
