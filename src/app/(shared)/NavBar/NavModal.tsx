'use client';

import Categories from '@/app/(routes)/components/Categories/Categories';
import { Category as CategoryType } from '@/app/(server)/services/category';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { enableScrolling, handleWindow } from '../utils/windowFunctions';
import { stopPropagation } from '../utils/general';
import { useModal } from '../hooks/modal-hook';

interface NavModalProps {
  categories: CategoryType[];
}

export default function NavModal({ categories }: NavModalProps) {
  const pathName = usePathname();
  const {
    searchParam,
    modal,
    closeModal,
    openModal,
    openModalInMobile,
    setModal,
  } = useModal('nav', pathName);

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
      // setModal(true);
      // enableScrolling();1
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
          <div className="navModal" onClick={stopPropagation}>
            <Categories categories={categories} />
          </div>
        </div>
      )}
    </>
  );
}
