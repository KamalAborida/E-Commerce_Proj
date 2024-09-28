'use client';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Recipt from './Recipt';

export default function SuccessModal() {
  const searchParams = useSearchParams();
  const successSearchParam = searchParams.get('success');
  const [successModal, setSuccessModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (successSearchParam) {
      setSuccessModal(true);
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      setSuccessModal(false);
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
  }, [successSearchParam]);

  const closeModal = () => {
    setSuccessModal(false);
    router.push('/');
  };

  const backHomeHandler = () => {
    router.push('/');
    setSuccessModal(false);
  };

  return (
    <>
      {successModal && (
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
            <button onClick={backHomeHandler} className="successModal__btn">
              BACK TO HOME
            </button>
          </div>
        </div>
      )}
    </>
  );
}
