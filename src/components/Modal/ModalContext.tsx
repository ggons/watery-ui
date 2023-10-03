import React, { useState, useCallback, createContext } from 'react';
import ReactDOM from 'react-dom';

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

type TModalState = IOpenModalProps & {
  id: string;
  onClose: (data?: any) => void;
  onConfirm: (data?: any) => void;
};

export const ModalContext = createContext({
  openModal: (props: IOpenModalProps) => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modals, setModals] = useState<TModalState[]>([]);

  const closeModal = useCallback((id: string) => {
    setModals((modalState) => modalState.filter((d) => d.id !== id));
  }, []);

  const openModal = useCallback(
    ({
      Modal,
      header,
      body,
      overlayClose = false,
      closeButton = false,
      overlayStyle,
      onOk,
      onCancel,
    }: IOpenModalProps) => {
      return new Promise((resolve) => {
        const id = String(Date.now());

        const onClose = (data = undefined) => {
          onCancel && onCancel();
          closeModal(id);
          resolve({
            isConfirm: false,
            data,
          });
        };

        const onConfirm = (data = undefined) => {
          onOk && onOk();
          closeModal(id);
          resolve({
            isConfirm: true,
            data,
          });
        };

        setModals((prevState) => {
          return [
            ...prevState,
            {
              id,
              Modal,
              header,
              body,
              overlayClose,
              closeButton,
              overlayStyle,
              onOk,
              onConfirm,
              onClose,
              onCancel,
            },
          ];
        });
      });
    },
    [closeModal],
  );

  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDivElement>,
    onClose: () => void,
  ) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    onClose();
  };

  return (
    <ModalContext.Provider value={{ openModal }}>
      {modals.map(
        ({
          id,
          Modal,
          header,
          body,
          overlayClose,
          closeButton,
          overlayStyle,
          onConfirm,
          onClose,
          onCancel,
        }) => {
          const isUseFooter: boolean =
            !!onConfirm || !!closeButton || !!onCancel;

          return (
            <ModalPortal key={id}>
              <div
                className="watery-ui-modal-wrapper"
                style={{
                  position: 'fixed',
                  width: '100vw',
                  height: '100vh',
                  top: 0,
                  left: 0,
                  display: 'grid',
                  placeItems: 'center',
                  zIndex: 1001,
                  backgroundColor: 'rgba(255, 255, 255, 0.75)',
                  ...overlayStyle,
                }}
                {...(overlayClose
                  ? { onClick: (e) => handleBackdropClick(e, onClose) }
                  : {})}
              >
                {Modal ? (
                  React.cloneElement((<Modal />) as React.ReactElement, {
                    onConfirm,
                    onClose,
                  })
                ) : (
                  <div className="bg-white rounded-lg border border-gray-500 shadow relative">
                    {closeButton && (
                      <button
                        className="absolute top-1 right-1 rounded-full p-2 hover:bg-gray-100 active:bg-gray-200"
                        onClick={() => onClose()}
                      >
                        X
                      </button>
                    )}

                    {header && (
                      <div className="px-16 h-16 grid items-center justify-center border-b border-gray-500">
                        <h2 className="text-gray-700 text-xl font-medium">
                          {header}
                        </h2>
                      </div>
                    )}

                    <div className="px-16 py-8 text-lg">
                      {typeof body === 'string'
                        ? body
                        : React.cloneElement(body as React.ReactElement, {
                            onConfirm,
                            onClose,
                          })}
                    </div>

                    {isUseFooter && (
                      <div className="p-2 w-full flex justify-center gap-x-1">
                        {onConfirm && (
                          <button
                            className="grow rounded-md text-lg bg-gray-700 text-white hover:bg-gray-800 active:bg-gray-900"
                            onClick={() => onConfirm()}
                          >
                            확인
                          </button>
                        )}
                        {(closeButton || onCancel) && (
                          <button
                            className="grow rounded-md text-gray-700 hover:bg-gray-100 active:bg-gray-200"
                            onClick={() => onClose()}
                          >
                            취소
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </ModalPortal>
          );
        },
      )}
      {children}
    </ModalContext.Provider>
  );
}

function ModalPortal({ children }: { children: React.ReactNode }) {
  if (!document.getElementById('modal-root')) {
    document.body.insertAdjacentHTML(
      'afterbegin',
      '<div id="modal-root"></div>',
    );
  }

  return ReactDOM.createPortal(
    children,
    document.getElementById('modal-root') as HTMLDivElement,
  );
}
