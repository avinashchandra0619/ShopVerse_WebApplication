import React, { useContext } from 'react';
import { ProductContext } from '../context';

export default function Toast() {
  const context = useContext(ProductContext);
  const { toastMessage, toastVisible } = context;

  return (
    <div className={`toast-message ${toastVisible ? 'show' : ''}`}>
      {toastMessage}
    </div>
  );
}
