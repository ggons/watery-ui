import React from 'react';
import { Button, Text } from './components';
import { useModal } from './components/Modal';

function App() {
  const { openModal } = useModal();

  const handleModalOpenBtnClick = () => {
    openModal({
      Comp: ({ onClose }) => (
        <div>
          <h2>MODAL</h2>
          <button onClick={onClose}>CLOSE MODAL</button>
        </div>
      ),
    });
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
