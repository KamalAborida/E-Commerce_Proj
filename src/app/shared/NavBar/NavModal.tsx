'use client';

import Categories from '@/app/shared/Categories/Categories';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { enableScrolling, handleWindow } from '../utils/windowFunctions';
import { stopPropagation } from '../utils/general';
import { useModal } from '../hooks/modal-hook';
import { CategoryType } from '../utils/types';
import { useAppSelector } from '@/lib/store';

export default function NavModal() {
  const pathName = usePathname();
  const {
    searchParam,
    modal,
    closeModal,
    openModal,
    openModalInMobile,
    setModal,
  } = useModal('nav', '');

  const categories = useAppSelector((state) => state.data.categories);

  const [screenWidth, setScreenWidth] = useState<number | null>(null);
  const isNotMobile = screenWidth && screenWidth > 450;
  const isMobile = screenWidth && screenWidth < 450;

  useEffect(() => {
    handleWindow(setScreenWidth);
  }, []);

  useEffect(() => {
    if (searchParam && isNotMobile) {
      openModal();
    } else if (searchParam && isMobile) {
      openModalInMobile();
    } else {
      closeModal();
    }
  }, [
    isMobile,
    isNotMobile,
    searchParam,
    screenWidth,
    openModal,
    closeModal,
    openModalInMobile,
    setModal,
  ]);

  return (
    <>
      {modal && (
        <div className="backdrop" onClick={closeModal}>
          {/* <p style={{ color: 'black', border: '5px solid red' }}>PPP</p> */}
          <div className="navModal" onClick={stopPropagation}>
            <Categories />
          </div>
        </div>
      )}
    </>
  );
}
