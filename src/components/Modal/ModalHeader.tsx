import React from 'react';

const titleWrapperStyle = {
  borderBottom: '1px solid #ddd',
  padding: '16px 48px',
};

const titleStyle = {
  margin: 0,
  fontSize: '1.5rem',
};

interface IModalTitleProps {
  children: React.ReactNode;
}

export default function ModalHeader({ children }: IModalTitleProps) {
  return (
    <div style={titleWrapperStyle}>
      <h2 style={titleStyle}>{children}</h2>
    </div>
  );
}
