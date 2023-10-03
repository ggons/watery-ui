import React from 'react';

const bodyWrapperStyle = {
  padding: '16px 48px',
};

const bodyStyle = {
  margin: 0,
  fontSize: '1rem',
};

interface IModalBodyProps {
  children: React.ReactNode;
}

export default function ModalBody({ children }: IModalBodyProps) {
  return (
    <div style={bodyWrapperStyle}>
      <div style={bodyStyle}>{children}</div>
    </div>
  );
}
