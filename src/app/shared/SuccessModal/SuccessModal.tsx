'use client';
import Image from 'next/image';
import { Suspense, useEffect } from 'react';
import Recipt from './Recipt';
import { useModal } from '../hooks/modal-hook';

export default function SuccessModal() {
  const { searchParam, modal, closeModal, openModal } = useModal(
    'success',
    'home'
  );

  useEffect(() => {
    if (searchParam) {
      openModal();
    } else {
      closeModal();
    }
  }, [closeModal, openModal, searchParam]);

  return (
    <>
      {modal && (
        <div className="backdrop" onClick={closeModal}>
          <div className="successModal">
            <Image
              className="successModal__icon"
              src={'/success-icon.svg'}
              alt="success"
              width={64}
              height={64}
            />
            <h1 className="successModal__title">THANK YOU FOR YOUR ORDER</h1>
            <p className="successModal__note">
              You will receive an email confirmation shortly.
            </p>
            <Recipt />
            <button onClick={closeModal} className="successModal__btn">
              BACK TO HOME
            </button>
          </div>
        </div>
      )}
    </>
  );
}
