# Watery-UI

Watery UI is a UI component library that helps you deploy React applications faster and more efficiently.

## Table of contents

- <a href="#Installation">Installation</a>
- <a href="#Modal">Modal</a>

## Installation

To install, you can use npm or yarn:

```
$ npm install --save watery-ui
$ yarn add watery-ui
```

## Modal

You can make modals and use them in the style you want.

Modals can operate synchronously/asynchronously,

You can also pass the value to the place called within the modal.

1. First, add a provider.

```
import { ModalProvider } from 'watery-ui';

<ModalProvider>
  <App />
</ModalProvider>
```

2. Get openModal from useModal. And use openModal.

```
import { useModal } from 'watery-ui';

function ModalSample() {
  const { openModal } = useModal();

  const handleOpenModalBtnClick = () => {
    openModal({
      Comp: ({ onConfirm, onClose }) => {
        return (
          <div>
            <h2>MODAL</h2>
            <button onClick={() => onConfirm()}>CONFIRM</button>
            <button onClick={() => onClose()}>CLOSE</button>
          </div>
        )
      }
    })
  }

  return (
    <button onClick={handleOpenModalBtnClick}>OPEN MODAL</button>
  )
}
```

### openModal(params)

The return value of openModal is in the form of Promise.

The return value is { isConfirm, data }.

- isConfirm: If onConfirm is operated, it has a true value, and if it is onClose, it has a false value.
- data: If a value is sent to the first factor of onConfirm or onClose, the value is returned by putting it in the data.

<table style="margin: 10px 0;">
  <tr>
    <th>Name</th>
    <th>Description</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>Modal</td>
    <td>
      (function) Feel free to write modal. Use onConfirm, onClose delivered.
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

#### Examples

```
  const handleModalOpenBtnClick = async () => {
    const result = await openModal({
      Modal: ({ onConfirm, onClose }) => (
        <div>
          <h2>MODAL</h2>
          <button onClick={() => onConfirm('Confirm')}>CONFIRM MODAL</button>
          <button onClick={() => onClose('Close')}>CLOSE MODAL</button>
        </div>
      ),
      onOk: () => {
        console.log('onOk');
      },
      onCancel: () => {
        console.log('onCancel');
      },
      overlayClose: true,
    });

    console.log(result);

    // When you click CONFIRM MODAL
    // output: onOk
    // output: { isConfirm: true, data: 'Confirm' }

    // When you click CLOSE MODAL
    // output: onCancel
    // output: { isConfirm: false, data: 'Close' }
  };
```
