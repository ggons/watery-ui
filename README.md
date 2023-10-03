## Watery-UI

Watery UI 는 React 애플리케이션을 더욱 빠르고 효율적으로 구축할 수 있도록 돕는 UI 컴포넌트 라이브러리입니다.

## Table of contents

- Installation
- Modal

## Installation

To install, you can use npm or yarn:

    $ npm install --save watery-ui
    $ yarn add watery-ui

## Modal

First, add a provider.

    import { ModalProvider } from 'watery-ui';

    <ModalProvider>
      <App />
    </ModalProvider>

Get openModal from useModal. And use openModal.

    import { useModal } from 'watery-ui';

    function ModalSample() {
      const { openModal } = useModal();

      const handleOpenModalBtnClick = () => {
        openModal({
          Comp: ({ onConfirm, onClose }) => {
            return (
              <div>
                <h2>MODAL</h2>
                <button onClick={onConfirm}>CONFIRM</button>
                <button onClick={onClose}>CLOSE</button>
              </div>
            )
          }
        })
      }

      return (
        <button onClick={handleOpenModalBtnClick}>OPEN MODAL</button>
      )
    }

- openModal(params)

<table style="margin-left: 40px;">
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>Comp</td>
    <td>
      (function) Feel free to write modal content. Use onConfirm, onClose delivered.
    </td>
    <td></td>
  </tr>
  <tr>
    <td>overlayClose</td>
    <td>
      (boolean) Whether to close when you click Overlay
    </td>
    <td>false</td>
  </tr>
  <tr>
    <td>onOk</td>
    <td>
      (function) It is a function that runs within onConfirm.
    </td>
    <td></td>
  </tr>
  <tr>
    <td>onCancel</td>
    <td>
      (function) It is a function that runs within the onCancel.
    </td>
    <td></td>
  </tr>
  <tr>
    <td>overlayStyle</td>
    <td>
      (object) Create a style to apply to Overlay.
    </td>
    <td></td>
  </tr>
</table>
