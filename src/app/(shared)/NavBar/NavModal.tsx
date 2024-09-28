'use client';
import Categories from '@/app/(routes)/components/Categories/Categories';
import { Category as CategoryType } from '@/app/(server)/services/category';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface NavModalProps {
  categories: CategoryType[];
}

export default function NavModal({ categories }: NavModalProps) {
  const searchParams = useSearchParams();
  const navSearchParam = searchParams.get('nav');
  const screenWidth = window.innerWidth;
  const [navModal, setNavModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (navSearchParam && screenWidth > 450) {
      setNavModal(true);
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else if (navSearchParam && screenWidth < 450) {
      setNavModal(true);
      window.scrollTo(0, 0);
    } else {
      setNavModal(false);
      document.body.style.overflow = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
  }, [navSearchParam, screenWidth]);

  const closeModal = (event: React.MouseEvent<HTMLElement>) => {
    setNavModal(false);
    router.back();
  };

  const stopPropagation = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      {navModal && (
        <div className="backdrop" onClick={closeModal}>
          <div className="navModal" onClick={stopPropagation}>
            <Categories categories={categories} />
          </div>
        </div>
      )}
    </>
  );
}
