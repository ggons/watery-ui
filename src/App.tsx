import React from 'react';
import { Button, Text } from './components';
import { useModal, Modal, ModalHeader, ModalBody } from './components/Modal';

function App() {
  const { openModal } = useModal();

  const handleModalOpenBtnClick = async () => {
    const result = await openModal({
      Modal: ({ onConfirm, onClose }) => (
        <Modal>
          <ModalHeader>MODAL HEADER</ModalHeader>
          <ModalBody>Watery UI MODAL BODY 입니다. 많이 이용해주세요.</ModalBody>
        </Modal>
      ),
      onOk: () => {
        console.log('onOk');
      },
      onCancel: () => {
        console.log('onCancel');
      },
      overlayClose: true,
    });
    // const result = await openModal({
    //   Modal: ({ onConfirm, onClose }) => (
    //     <div>
    //       <h2>MODAL</h2>
    //       <button onClick={() => onConfirm('Confirm')}>CONFIRM MODAL</button>
    //       <button onClick={() => onClose('Close')}>CLOSE MODAL</button>
    //     </div>
    //   ),
    //   onOk: () => {
    //     console.log('onOk');
    //   },
    //   onCancel: () => {
    //     console.log('onCancel');
    //   },
    //   overlayClose: true,
    // });

    console.log(result);
  };

  return (
    <div className="App">
      <Text>Text</Text>
      <Button>Button</Button>
      <button onClick={handleModalOpenBtnClick}>OPEN MODAL</button>
    </div>
  );
}

export default App;
